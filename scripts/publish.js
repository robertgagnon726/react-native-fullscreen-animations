const exec = require("child_process").exec;

// Make sure there are no unstaged or staged changes
// Increment the version number
// Commit and push the version number
// Run npm publish

exec("git status", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
