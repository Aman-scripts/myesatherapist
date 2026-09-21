<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex, follow"/>
        <title>XML Sitemap</title>
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 40px 20px 60px;
            background: #ffffff;
            color: #111827;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          }
          .wrap { max-width: 1376px; margin: 0 auto; }
          h1 { margin: 0 0 24px; font-size: 40px; line-height: 1.15; font-weight: 800; color: #0f172a; }
          .note {
            margin: 0 0 34px;
            padding: 20px;
            border-radius: 12px;
            background: #eaf6ee;
            color: #14532d;
            font-size: 18px;
            line-height: 1.5;
          }
          .table-wrap { overflow-x: auto; }
          table { width: 100%; border-collapse: collapse; font-size: 18px; }
          thead th {
            padding: 18px;
            background: #f3f4f6;
            color: #1f2937;
            font-weight: 600;
            text-align: left;
            white-space: nowrap;
          }
          tbody td { padding: 18px; border-bottom: 1px solid #e5e7eb; color: #374151; white-space: nowrap; }
          tbody tr:hover td { background: #fafafa; }
          a { color: #1d4ed8; text-decoration: none; }
          a:hover { text-decoration: underline; }
          td.url { white-space: normal; word-break: break-all; }
          @media (max-width: 720px) {
            h1 { font-size: 30px; }
            .note, table { font-size: 15px; }
            thead th, tbody td { padding: 12px; }
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>XML Sitemap</h1>
          <div class="note">
            This XML sitemap is generated for search engines following the sitemap.org protocol.
            It lists every page on this site along with when it was last updated.
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Last Modified</th>
                  <th>Change Frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sm:urlset/sm:url">
                  <tr>
                    <td class="url"><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                    <td><xsl:value-of select="sm:lastmod"/></td>
                    <td><xsl:value-of select="sm:changefreq"/></td>
                    <td><xsl:value-of select="sm:priority"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
