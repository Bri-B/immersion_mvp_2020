# Drink Roulette
A random alcoholic beverage generator for responsible drinkers 21+.
## Table of Contents
1. [Summary](#summary)
2. [Installation](#installation)
3. [Script](#script)
## Summary
Shake up your routine with Drink Roulette. With the click of a button, you can find your next drink to have a relaxing evening, or to have the best drink at the party. The populated drink includes an ingredients list, instructions, and measurements.
## Installation
Setting up the environment requires global installations of the latest stable version of node and node project manager(npm). Additionally, the latest version of MySQL should be on your machine and running.
### System Requirements
- Globally installed [node](https://nodejs.org/en/) >= 12.18.4
- Globally installed [npm](https://www.npmjs.org/) >= 6.14.8
- Database installed [mysql](https://dev.mysql.com/) >= 8.0
### Database
Log into the shell to set up database and user. From the Linux command-line, you would enter the following to log in as the root user and to enter monitor mode:
```
mysql -u{username} -p
```
Next, create your database where the information will be stored.
```
CREATE DATABASE {database name};
```
You will need the username, password, database name, database host, and database port for the environmental variable setup.
### Making Your Repository
Start in Github to fork your repository from this main repository. Then move to your local machine to connect to your fork.
On the command prompt run the following commands
```
$ git clone {your github repo link}
$ cd immersion_mvp_2020/
$ npm install
```
### Environment Variables
Place in a .env file in the outermost directory. Complete the file using the variables below.
```
PORT // Express Server Port
DB_DB // Database Name
DB_USER // Database username
DB_PASS // Database Password
DB_HOST // Database host
DB_PORT // Database port
```
## Script
### Server
Run the following command in your terminal to run the local server:
```sh
$ npm start
```
### Client Compiling
Run the following command in your terminal to run webpack:
```sh
$ npm run build
```