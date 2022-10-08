# README

* Node version
	* v14.8.0

* System dependencies
	* Ubuntu [x86_64-linux]

* Configuration
	* This project was created using create-react-app. It's necessary to have node installed to run this project.

* How to run the project
	* npm install
	* npm start

* How to run the test suite
  * npm run test

* Observations
  * inside the file api.js it's defined an api key to fetch the currency rate in the following URL "https://api.apilayer.com/fixer". The key was static defined in the file. This is not a good pratice but it was set this way to make the testing easier. In a production enviroment it's recomended to set the api key as an ENV and get its value through process.env. Another aproach is to make a separated service only to store and retrive keys.