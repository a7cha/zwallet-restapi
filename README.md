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
https://documenter.getpostman.com/view/12493671/TVsuDniu


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

* POST  ``` zwallet/api/v1/auth/login ``` Route for login existing user.
* POST  ``` zwallet/api/v1/auth/register ``` Route for register user.
* PATCH  ``` zwallet/api/v1/auth/reset_password ``` Route for forgot password user identified by id.
* GET  ``` zwallet/api/v1/user ``` Route for get data user identified by Token.
* PATCH  ``` zwallet/api/v1/user/patch_user ``` Route for edit data user identified by Token.
* GET  ``` zwallet/api/v1/topup ``` Route for get all data topup instruction.
* POST  ``` zwallet/api/v1/topup ``` Route for post data topup instruction.
* PATCH  ``` zwallet/api/v1/topup/7 ``` Route for edit data topup instruction by number identified by Token.
* DELETE  ``` zwallet/api/v1/topup/7 ``` Route for delete data topup instruction by number identified by Token.











