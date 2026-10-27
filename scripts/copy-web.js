// Copies the game files into www/, the folder Capacitor packs into the APK.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const out = path.join(root, "www");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
for (const file of ["index.html", "three.min.js"]) {
  fs.copyFileSync(path.join(root, file), path.join(out, file));
}
console.log("www/ tayyor");
