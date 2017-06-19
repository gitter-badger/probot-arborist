# Probot: Arborist

> A GitHub Integration built with [probot](https://github.com/probot/probot) that validates new branches meet criteria and reports on branches that can be cut down.

## Goals for Project

- [X] Arborist starts properly
- [ ] Arborist reads the config file
- [X] Arborist catches events where a branch is created
- [X] Arborist catches events when an issue is created by the bot
- [ ] Arborist validates the branch against the configuration setting
- [X] Arborist creates an issue for a branch that doesn't meet naming convention
- [ ] Arborist updates existing issue for any new branches that don't meet naming convention
- [ ] Arborist creates an issue for Pull Request that is closed, but the branch hasn't been deleted
- [ ] Arborist creates an issue for Pull Request that is merged, but the branch hasn't been deleted
- [ ] Arborist updates existing issue for any Pull Requests that are closed, but the branch hasn't been deleted
- [ ] Arborist updates existing issue for any Pull Requests that are merged, but the branch hasn't been deleted
- [ ] Add support for Arborist deleting branches based on configuration setting. (Currently, [node-gtthub](https://mikedeboer.github.io/node-github/) doesn't support deleting branches
- [ ] Arborist monitors created issues for any that get closed/completed.
- [ ] Arborist creates new issues when conditions are met after previous issues are closed.

## Setup

```
# Install dependencies
npm install

# Run the bot
npm start
```

## Usage

1. **[Configure the GitHub Integration](https://github.com/integration/probot-arborist)**
2. Create `.github/branch.yml`

A `.github/branch.yml` file is required to enable the plugin. The file can be empty, or it can override any of these default settings:

```yml
# Configuration for probot-arborist - https://github.com/mcmahonjohn/arborist

# Name of the account used for the bot
botName: probot
# Regular expression pattern for new branch names must meet
branchNamePattern: [a-zA-Z-_]
# Number of days after a Pull Request was closed before branch should be deleted
daysUntilStale: 14
# Number of days after a Pull Request was merged before branch should be deleted
daysUntilClose: 7
# Branches with these phrases will never be considered for deletion. Set to `[]` to disable
exemptLabels:
  - master
  - staging
  - develop
```

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this plugin.
