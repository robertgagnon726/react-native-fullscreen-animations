const exec = require("child_process").exec;

// Make sure there are no unstaged or staged changes
// Make sure that there are no unpushed changes
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
  console.log(stdout.includes("ahead"));
  console.log(stdout.includes("diff"));
  console.log(stdout.includes("+"));
  console.log(`stdout: ${stdout}`);
});
