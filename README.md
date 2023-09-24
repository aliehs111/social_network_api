# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
This application uses MongoDB and Mongoose to create the backend for a social network API that includes users, friends, thoughts and reactions. 
## Installation
The backend for this application can be used and modified and tested in insomnia. To make it your own and maybe create the UI, clone the repository, be sure to be running node.js, with Mongoose installed then install the packages with "npm i".  Then run "npm start" to begin or "npm run dev" for developer mode. Use localhost:3001.
## Usage
This is a NoSQL application with two user models.  The model, User has an embedded document for friends.  The Thought model has an embedded document for reactions.  Endpoints are all tested for the following CRUD operations:
* GET (READ) all users
* GET (READ) single user by ID
* POST (CREATE) user
* PUT (UPDATE) user
* DELETE user by ID
* GET (READ) all thoughts
* GET (READ) single thought by ID
* CREATE (POST) new thought
* UPDATE (PUT) a thought
* CREATE (POST) new reaction to thought    
* DELETE reaction
* CREATE (POST) friend on user list
* DELETE friend

## License
This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.
## Resources and Contributors
Watching class videos on the NoSQL classes was the best help. Rearching the documentation for Mongoose helped with understanding the built-in functions and syntax.

## Links and Visuals
This backend-only application is not deployed.
This is the GitHub Repository: https://github.com/aliehs111/social_network_api

![Alt text](/assets/images/Screenshot%202023-09-24%20at%207.31.27%20PM.png)