## Live Site

See this site in its most recent `prod` implementation at https://www.apps.bryansweeney.io

## About

This application is meant to be helpful in understanding exponential growth at play in the compounding interest process.

Variables that the user can experiment with include time, rate of return, compounding frequency, recurrent investments, and variable initial amounts.

In the process, much the application was a

## Tools

This application was bootstrapped with `create-react-app`, using NPM and React. Some of the key libraries used within the application include `react-chartjs-2` and `react-styled-components`.

CSS is used primarily in styled components to create a sleek front end for the application that is dynamic but not yet for mobile (to come).

Deployment is taken care of with a Heroku webhook that polls the application for commits to `prod`. Heroku runs the application with Docker, which uses a dynamic port scheme so the Dockerfile does not need to `EXPORT` any port.

## Environment Setup

### Local development build for UI

1. `npm i`
2. `npm run start`

### Local full stack build

1. `npm i`
2. `npm run build`
3. `node server.js`

## Future Work

There are a number of features that are yet to be implemented.

- Redux implementation to manage state
- Responsive styling for mobile devices
- Test suite
- CI pipeline for deployments
