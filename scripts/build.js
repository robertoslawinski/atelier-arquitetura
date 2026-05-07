const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const measurementId = (process.env.VITE_GA_MEASUREMENT_ID || "").trim();

const skipNames = new Set([
  ".git",
  ".vscode",
  "dist",
  "node_modules",
  "scripts",
  "package.json",
  "package-lock.json",
  "netlify.toml"
]);

const gaBlockRegex =
  /\s*<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=[^"]+"><\/script>\s*<script>[\s\S]*?gtag\('config',\s*'[^']+'\);\s*<\/script>/g;

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyRecursive(srcDir, outDir) {
  ensureDir(outDir);

  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (skipNames.has(entry.name)) {
      continue;
    }

    const srcPath = path.join(srcDir, entry.name);
    const outPath = path.join(outDir, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, outPath);
      continue;
    }

    if (entry.isFile() && path.extname(entry.name).toLowerCase() === ".html") {
      let html = fs.readFileSync(srcPath, "utf8");
      html = html.replace(gaBlockRegex, "");

      if (measurementId) {
        const gaSnippet = [
          `  <script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script>`,
          "  <script>",
          "    window.dataLayer = window.dataLayer || [];",
          "    function gtag(){dataLayer.push(arguments);}",
          "    gtag('js', new Date());",
          `    gtag('config', '${measurementId}');`,
          "  </script>"
        ].join("\n");

        html = html.replace(/(\s*<link rel="stylesheet" href="[^"]+" \/>)/, `\n${gaSnippet}$1`);
      }

      fs.writeFileSync(outPath, html, "utf8");
      continue;
    }

    fs.copyFileSync(srcPath, outPath);
  }
}

fs.rmSync(distDir, { recursive: true, force: true });
copyRecursive(rootDir, distDir);
