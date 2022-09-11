const exec = require("child_process").exec;
const fs = require("fs");

// Check for local changes
// Commit and push the version number
// Run npm publish

console.log("Checking for local changes...");

exec("git status", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  const isAhead = stdout.includes("ahead");
  const hasDiff = stdout.includes("diff");
  if (isAhead) {
    console.error("Error - You have unpushed changes");
    return;
  }
  if (hasDiff) {
    console.error("Error - You have local changes");
    return;
  }

  console.log("Check for local changes completed.");

  console.log("Incrementing version number...");
  fs.readFile("package.json", function (err, content) {
    if (err) throw err;
    const package = JSON.parse(content);
    const version = package.version;
    const versionArr = version.split(".");
    const patchVersion = versionArr[versionArr.length - 1];
    const majorVersion = versionArr[0];
    const minorVersion = versionArr[1];
    const newPatchVersion = new Number(patchVersion) + 1;
    const newVersion = `${majorVersion}.${minorVersion}.${newPatchVersion}`;
    const updatedPackage = {...package};
    updatedPackage.version = newVersion;
    fs.writeFile(
      "package.json",
      JSON.stringify(updatedPackage),
      function (err) {
        if (err) throw err;
        console.log("test");
      }
    );
  });

  exec("npm run prettier-package-json");
  exec("git add ./package.json");
});
