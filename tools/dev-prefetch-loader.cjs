// Lets router.prefetch load pages during `next dev`. Next otherwise
// returns early in development, so every click waits for a new server render.
module.exports = function devPrefetchLoader(source) {
  if (!source.includes("Don't prefetch during development")) return source;
  return source.replace(
    /if \(process\.env\.NODE_ENV === 'development'\) \{\r?\n\s*return null;\r?\n\s*\}/,
    "if (false) { return null; }",
  );
};
