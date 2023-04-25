# Angular starter kit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Branching Model
- The production branch for this project is `main`. No direct commits or PRs should be created towards this branch.
- Only critical production issues will be fixed in a branch taken from main and should be created as PR.
- The regular development activities will happen on the `development` branch. No Direct commit should be done to the development branch.
- For each ticket, the developer should create a new branch from development. This branch is known as feature branch.
- Feature branches are short-lived and should be deleted once the feature is completed and the PR is merged.
- Feature branches should follow the naming convention like `ticketID-short-description`. Example: `6813-architecture-changes`
- We should use atomic commits and branches. Meaning, each branch must either be a bug fix or a refactor or a new feature. Changes of different kind should not be done in the same branch.
- Commits should always contain working state code. For no reason, a broken state of the application has to be committed and pushed into VCS.
- **Never force push**, only valid reason is when you rebased recently or solved a merge conflict.
- Merge PRs by creating merge commits, squashing them overwrites the git history and gives undesirable results on `git blame`.
- The above list is not exhaustive, always good to take a step back and discuss what you're doing with the team before doing it.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
