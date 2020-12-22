RESTful API Zwallet built with Express Js and MySQL

## Tools
  * Node Js
  * Express Js
  * MySQL
  
## Getting Started
Before using our RESTful API, please install the method below

And clone our code using:
```git
$ git clone https://github.com/a7cha/zwallet-restapi.git
```
## Documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5a34e44b2cbb01cc1cc4)

## Installation
Before installing, make sure you already have installed [Node.js](https://nodejs.org/en/) and [XAMPP](https://www.apachefriends.org/download.html)

The installation process will immediately be carried out when you write the command below:
```bash
$ npm install
or
$ yarn
```

## Run API

##### Run with npm
```bash
$ npm start
```

##### Run with yarn
```bash
$ yarn start
```

##### Run with nodemon
```bash
$ nodemon start
```

## API SPECS

* POST  ``` /api/v1/auth/login ``` Route for login existing user.
* POST  ``` /api/v1/auth/register ``` Route for register new user.
* GET  ``` /api/v1/users/detail ``` Route for get data user identified with Token.
* GET  ``` /api/v1/users/transactions ``` Route for get all data transaction identified with Token.
* GET  ``` /api/v1/users/transactions/:id ``` Route for get data transaction by id identified with Token.
* POST  ``` /api/v1/users/transaction ``` Route for post data transaction.
* GET  ``` /api/v1/users/notification ``` Route for get data notification identified with Token.
* GET  ``` /api/v1/users/notification ``` Route for get data notification identified with Token.
* PATCH  ``` /api/v1/users/password ``` Route for change password user identified with Token.
* PATCH  ``` /api/v1/users/phone ``` Route for change number phone user identified with Token.
* PATCH  ``` /api/v1/users/photo ``` Route for change photo profile user identified with Token.
* PATCH  ``` /api/v1/users/edit ``` Route for change data user non-credential identified with Token.
* GET  ``` /api/v1/public/city ``` Route for get all data City.
* GET  ``` /api/v1/public/destination?limit=5&offset=1 ``` Route for get 5 data favorite destination.
* GET  ``` /api/v1/public/destination/find?q=Japan&limit=5&offset=1 ``` Route for find and get Japan destination.
* GET  ``` /api/v1/public/classes?type=2&id_destination=2 ``` Route for find plane by class id and destination id.
* GET  ``` /api/v1/public/classes/5 ``` Route for get plane by id.


