const core = require("@actions/core");
const github = require("@actions/github");

try {
  const name = core.getInput("who_to_greet");

  console.log(`Hello ${name}`);

  const time = new Date().toISOString();

  core.setOutput("time", time);
  core.exportVariable("HELLO_TIME", time);

  core.startGroup("GitHub Context");
  console.log(JSON.stringify(github.context, null, 2));
  core.endGroup();

} catch (error) {
  core.setFailed(error.message);
}