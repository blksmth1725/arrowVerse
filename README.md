# Arrow

## Available Scripts

In the project directory, you can run (after cloning repo):

### `npm run start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

### `Heroku`

Successfully deployed to Heroku

## For Production Visit:

### `https://arrow-verse.herokuapp.com/`

## Project structure && formation

`1`. Cleaned up boiler-plate files && folders.

`2`. Proceeded to display as much data as possible from the main API URL.

`3`. Handled MainPage.js first => Took API data (from: https://tvmaze.com/api/shows/{id}) and optimized data to recieve Show info

`4`. Worked on CastGrid.js => Took API data (from: https://tvmaze.com/shows/{id}/cast) and optimized data to recieve CastMember info.

`5`. Created CastGrid component.

`6`. Made CastGrid elements Links which routes user to individual CastMemberPage.js

`7`. Styling of CastMemberPage.js

### `AT THIS POINT I MADE MY FIRST SUBMISSION`

`8`. Deployed application via Heroku.

`9`. Missed requirment: "Include the ability to export the cast member data for the show as a \*.csv file."

`10`. Added Link which allows user to download CastMember information in .csv format.

`11-a`. Refactoring: This stage consisted of revising my code && and restructuring my folders. Created a Utils folder which contains helper.js && theme.js. Helpers.js is a file which contains functions that help optimized code recieved from API. Theme.js acts as a constants to be used in chakraUI styling.

`11-b`. Refactoring: This stage consisted of revising my code && and restructuring my folders. Created Api folder which contains files that help with setting constants and axios fecthing functions for API calls.

`12`. Created EpisodePage.js which displays all avaianle show episodes (from: https://api.tvmaze.com/shows/{id}/episodes
)

`13`. Styled EpisodeCard component.

## Technologies used

React, Javascript, Axios, React-Router, React-Csv, Express (in order to deploy on Heroku), ChakraUI.
