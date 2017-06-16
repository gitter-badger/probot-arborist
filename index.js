"use strict";

module.exports = (robot) => {
  console.log('Yay, the plugin was loaded!');

  robot.on('create', async context => {
    var payload = context.payload;

    if ( payload.ref_type === 'branch' ) {
      robot.log(context);
    }

  }
  // If the branch does not meet naming standard, then create an issue listing that branch
  // Track any issues created and whether they get closed/completed. If so, create a new one.

  // For more information on building plugins:
  // https://github.com/probot/probot/blob/master/docs/plugins.md

  // To get your plugin running against GitHub, see:
  // https://github.com/probot/probot/blob/master/docs/development.md
}
