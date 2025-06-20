const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "../../");
const sharedFile = path.resolve(__dirname, "../public/icons.svg");

const packageNames = ["mobile-ui", "tablet-ui", "web-ui"];

for (const pkg of packageNames) {
    const destDir = path.join(rootDir, pkg, "public"); // куда копировать
    const destFile = path.join(destDir, path.basename(sharedFile));

    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    if (fs.existsSync(destFile)) {
        fs.unlinkSync(destFile);
    }

    fs.symlinkSync(sharedFile, destFile, "file");

    console.log(`Symlink created from ${sharedFile} to ${destFile}`);
}
