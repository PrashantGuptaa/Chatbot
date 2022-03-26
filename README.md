# Financechatbot

Finance Chatbot is a chatbot assistant to interact with users and help them with account balance.

## Deployment and Hosting

Finance chat bot is deployed on Azure Virtual Machine and accessible via Ngrok tunnel. 

[Click To Access Finance Chat Bot](https://37021e01a942.ngrok.io/)

![Alt Text](https://imagesfinancechatbot.blob.core.windows.net/finchatbot/Finchatbot.gif)

## Features

* Integrated with Google Dialog Flow for natural language processing.
* Integrated with Mongo DB atlas (Cloud) for database purposes.
* Use of passport library for authentication.
* REST APIs to fetch metrics.

## Installation Steps

* Clone the code.
* Navigate to the cloned directory.
* Install NPM packages

      `npm install`

* Run the command to access the app on port 5000.

      `node app.js`

* Access the URL.
  
      `http://localhost:5000`

* Enter below details in the form.

       `Username: Admin`
       `Password: 12345678`
       `Name: Admin-User`

* Try sending below utterances to the bot (one by One)

       `Hello`
       `I want to check my balance`
       `No Thanks`
       
## Database
  
  Mongo DB Atlas is used to create the cluster and created 3 databases
          
* ChannelActivities - To track the users join and exit details with timestamp.
* Messages - To Track all the chats exchanged between user and bot.
* UserInfo - To Store Username and password for passport authentication

## Packages

* Express - For Routing
* Socket.io - For Bidirectional communication
* uuid - For generating session ID
* Mongoose - For Connecting with MongoDB
* Passport - For Authentication
* body-parser - For parsing body
* DialogFlow - For natural language processing

## Configurations

* All the configurations are part of config.js file in utilities folder and referenced across the app.
* Please note: security keys will be moved to the key vault for security purposes.
  
## REST APIs

* People who engaged with the bot - http://localhost:5000/api/getAllUsersInfo
* People who dropped off - http://localhost:5000/api/getDroppedUsersInfo
* Peole who completed a chat - http://localhost:5000/api/getCompletedUserInfo

## Security

Security is certainly a major requirement for any application. In Finance chat bot, there is a authentication mechanism using passport library which encrypts and validates user's credentials store in the mongo DB in the form of Salt and Hash. First, User is prompted to input the username and password, then it authenticates the user and redirect user to the chat bot screen.

## Error Message

In case of missing credentials or wrong credentials, user will be redirected to the error page.


![Alt Text](https://imagesfinancechatbot.blob.core.windows.net/finchatbot/Finchatbot.JPG)

  
