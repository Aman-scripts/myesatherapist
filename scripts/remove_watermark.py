import zlib
import struct

def decode_png(path):
    with open(path, 'rb') as f:
        data = f.read()
    idx = 8
    width = height = bit_depth = color_type = None
    palette = []
    trns = []
    idat = bytearray()
    while idx < len(data):
        length, ctype = struct.unpack('>I4s', data[idx:idx+8])
        idx += 8
        cdata = data[idx:idx+length]
        idx += length + 4
        if ctype == b'IHDR':
            width, height, bit_depth, color_type = struct.unpack('>IIBB', cdata[:10])
        elif ctype == b'PLTE':
            palette = [list(cdata[i:i+3]) for i in range(0, len(cdata), 3)]
        elif ctype == b'tRNS':
            trns = list(cdata)
        elif ctype == b'IDAT':
            idat.extend(cdata)
        elif ctype == b'IEND':
            break

    decompressed = zlib.decompress(idat)
    bpp = 1 if color_type == 3 else 4
    stride = width * bpp
    raw_lines = []
    offset = 0
    prev_row = bytearray(stride)
    for y in range(height):
        filter_type = decompressed[offset]
        offset += 1
        current_row = bytearray(decompressed[offset:offset+stride])
        offset += stride
        recon = bytearray(stride)
        for x in range(stride):
            filt = filter_type
            filt_val = current_row[x]
            left = recon[x - bpp] if x >= bpp else 0
            up = prev_row[x]
            diag = prev_row[x - bpp] if x >= bpp else 0
            if filt == 0:
                val = filt_val
            elif filt == 1:
                val = (filt_val + left) & 0xff
            elif filt == 2:
                val = (filt_val + up) & 0xff
            elif filt == 3:
                val = (filt_val + ((left + up) >> 1)) & 0xff
            elif filt == 4:
                p = left + up - diag
                pa, pb, pc = abs(p - left), abs(p - up), abs(p - diag)
                pr = left if pa <= pb and pa <= pc else (up if pb <= pc else diag)
                val = (filt_val + pr) & 0xff
            recon[x] = val
        raw_lines.append(recon)
        prev_row = recon
    rgba = []
    if color_type == 3:
        for y in range(height):
            row = []
            for x in range(width):
                pi = raw_lines[y][x]
                rgb = palette[pi]
                a = trns[pi] if pi < len(trns) else 255
                row.append([rgb[0], rgb[1], rgb[2], a])
            rgba.append(row)
    elif color_type == 6:
        for y in range(height):
            row = []
            for x in range(width):
                px = raw_lines[y][x*4:x*4+4]
                row.append([px[0], px[1], px[2], px[3]])
            rgba.append(row)
    return width, height, rgba

def encode_png_rgba(width, height, rgba, out_path):
    raw_bytes = bytearray()
    for row in rgba:
        raw_bytes.append(0)
        for px in row:
            raw_bytes.extend(px)
    compressed = zlib.compress(bytes(raw_bytes), level=9)
    def make_chunk(ctype, data):
        return struct.pack('>I', len(data)) + ctype + data + struct.pack('>I', zlib.crc32(ctype + data) & 0xffffffff)
    out = bytearray(b'\x89PNG\r\n\x1a\n')
    out.extend(make_chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)))
    out.extend(make_chunk(b'IDAT', compressed))
    out.extend(make_chunk(b'IEND', b''))
    with open(out_path, 'wb') as f:
        f.write(out)

def remove_stars_from_image():
    # 1. Update doyouneed-esa-perfect-v3.png
    src_path = 'public/doyouneed-esa-perfect-v3.png'
    w, h, rgba = decode_png(src_path)
    new_rgba = [[list(rgba[y][x]) for x in range(w)] for y in range(h)]

    x_min, x_max = 935, 1080
    y_min, y_max = 1255, 1375
    feather = 18
    src_dy = -120
    src_dx = 10

    target_perimeter = []
    source_perimeter = []
    for x in range(x_min, x_max + 1):
        target_perimeter.append(rgba[y_min][x][:3])
        target_perimeter.append(rgba[y_max][x][:3])
        source_perimeter.append(rgba[y_min + src_dy][x + src_dx][:3])
        source_perimeter.append(rgba[y_max + src_dy][x + src_dx][:3])
    for y in range(y_min, y_max + 1):
        target_perimeter.append(rgba[y][x_min][:3])
        target_perimeter.append(rgba[y][x_max][:3])
        source_perimeter.append(rgba[y + src_dy][x_min + src_dx][:3])
        source_perimeter.append(rgba[y + src_dy][x_max + src_dx][:3])

    avg_t = [sum(p[c] for p in target_perimeter) / len(target_perimeter) for c in range(3)]
    avg_s = [sum(p[c] for p in source_perimeter) / len(source_perimeter) for c in range(3)]
    delta_c = [avg_t[c] - avg_s[c] for c in range(3)]

    for y in range(y_min, y_max + 1):
        for x in range(x_min, x_max + 1):
            dist_x = min(x - x_min, x_max - x)
            dist_y = min(y - y_min, y_max - y)
            d = min(dist_x, dist_y)
            
            if d < feather:
                t = d / float(feather)
                w_blend = t * t * (3 - 2 * t)
            else:
                w_blend = 1.0
                
            src_px = rgba[y + src_dy][x + src_dx]
            orig_px = rgba[y][x]
            
            blended = []
            for c in range(3):
                adj_src = src_px[c] + delta_c[c]
                val = orig_px[c] * (1.0 - w_blend) + adj_src * w_blend
                blended.append(max(0, min(255, int(round(val)))))
                
            new_rgba[y][x] = [blended[0], blended[1], blended[2], rgba[y][x][3]]

    for path in [
        'public/doyouneed-esa-perfect-v3.png',
        'public/doyouneed-emotional-support-section.png',
        'public/doyouneed-esa-support-hd-v2.png'
    ]:
        encode_png_rgba(w, h, new_rgba, path)
        print('Cleaned and saved:', path)

if __name__ == '__main__':
    remove_stars_from_image()
