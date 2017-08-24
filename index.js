"use strict";

//TODO: This works as is. Need to add configuration file
module.exports = function (robot) {

  var branchNameIssueTemplate = {
    "title": "Recently created branch names don't conform to policy",
    "body": "The following branches were found to not met branch name policy:\n",
    "owner": "probot", // TODO: Need to pull from configuration file
    "repo": ""
  };

  var botCreatedIssues = [];

  var recordOpenedBotRelatedIssueProcess = function (context) {
    var openedIssuesPayload = context.payload;

    if (openedIssuesPayload.issue.title === branchNameIssueTemplate.title) {
      botCreatedIssues.push(openedIssuesPayload.issue);
    }
  };

  robot.on('create', async context => {
    var createPayload = context.payload;

    if ( createPayload.ref_type === 'branch' ) {

      var branchName = createPayload.ref;
      var branchNameRules = "[a-zA-Z-_][0-9]";  // TODO: Need to pull from configuration file

      var isBranchValid = branchName.match(branchNameRules);

      if (!isBranchValid) {
        if (botCreatedIssues.length === 0) {
          var newIssue = branchNameIssueTemplate;
          newIssue.body = newIssue.body + "* " + branchName;
          newIssue.repo = createPayload.repository.name;

          context.github.issues.create(newIssue);
        } else {
          // Find issue for branch names that don't meet policy
        }
      }
    }

  })

  robot.on('issues.opened', async context => {
    recordOpenedBotRelatedIssueProcess(context);
  })

  robot.on('issues.edited', async context => {
    var editedIssuesPayload = context.payload;

    if (editedIssuesPayload.issue.title === branchNameIssueTemplate.title) {
      // Do something?
    }
  })

  robot.on('issues.closed', async context => {
    var closedIssuePayload = context.payload;
    var caughtIssueId = closedIssuePayload.ref;

    if (closedIssuePayload.issue.title === branchNameIssueTemplate.title) {
      for (var i = 0; i <= botCreatedIssues.length; i++) {
        var currentIssueId = botCreatedIssues[i].ref;

        if (caughtIssueId === currentIssueId) {
          // TODO;
        }
      }
    }
  })

  robot.on('issues.reopened', async context => {
    recordOpenedBotRelatedIssueProcess(context);
  })

  // Track any issues created and whether they get closed/completed. If so, create a new one.
};
