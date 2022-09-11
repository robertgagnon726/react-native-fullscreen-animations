const {execSync} = require("child_process");
const fs = require("fs");

console.log("Checking for local changes...");

let status = execSync("git status", "utf8");
status = status.toString();

const isAhead = status.includes("ahead");
const hasDiff = status.includes("diff") || status.includes("modified");
if (isAhead) {
  console.error("Error - You have unpushed changes");
  return;
}
if (hasDiff) {
  console.error("Error - You have local changes");
  return;
}

console.log("Incrementing version number...");
const content = fs.readFileSync("package.json", "utf8");

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

fs.writeFileSync("package.json", JSON.stringify(updatedPackage));

console.log("Start formatting package.json...");
execSync("npm run prettier-package-json");
console.log("Finish formatting package.json");

console.log("Push up package.json changes...");
execSync("git add package.json");
execSync("git commit -m 'incremented version'");
execSync("git push");
console.log("Finished pushing up package.json changes...");

// console.log("Starting npm publish...");
// execSync("npm publish");
// console.log("npm publish finished");
