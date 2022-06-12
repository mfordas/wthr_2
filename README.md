# Before start

Set up your work environment following:
[React Native Getting Started documentation](https://reactnative.dev/docs/environment-setup)

This project is using React Native CLI, so be carefull.

Make sure you have yarn installed on you computer because this project have only `yarn.lock` file.

## Project setup

1. Install all dependencies in project root using: `yarn install`
2. If you want to develop also on iOS go to `ios` folder and run: `pod install`
3. Using `.env.tpl` create `.env` file with your API_KEY to [Open weather maps api](https://openweathermap.org/api). You API key need to have permissions for Geolocation api and OneCall api v1.0.

## Running project

In project root in terminal run: `yarn ios` or `yarn android` depends on which platform you want to work.
