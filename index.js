"use strict";

module.exports = function (robot) {

  robot.on('create', async context => {
    var payload = context.payload;

    if ( payload.ref_type === 'branch' ) {
      console.log("caught branch");
    }

  })
  // If the branch does not meet naming standard, then create an issue listing that branch
  // Track any issues created and whether they get closed/completed. If so, create a new one.
};
