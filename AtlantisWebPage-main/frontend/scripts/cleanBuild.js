const fs = require("fs");
const path = require("path");

const buildDir = process.env.BUILD_PATH || "build";
const blocked = ["ayudas", "tests"];

blocked.forEach((name) => {
  const target = path.join(buildDir, name);
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
});

