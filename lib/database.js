var mongoose = require('mongoose');
var config = require("../Utilities/config");
var Message = require('../Models/messageModel');
var ChannelActivity = require('../Models/channelActivityModel');
const bcrypt = require('bcrypt');
const UserDetails = require("../Models/UserDetail");
const FeedbackData = require("../Models/feedbackModel");


var databaseUrl = config.mongoDB_connection_string;
mongoose.set(config.useFindAndModify, false);

/**
 * Connect to MongoDB
 */
mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    console.log(config.MongoDBConnectionMessage);
    if (err) {
        console.log(err);
    }
}) 

/**
 * Retrieved all the stored messages from Mongo DB
 */
var getAllMessages = (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages);
    })
}

/**
 * Retrieved all the dropped users from Mongo DB
 */
var getDroppedUserInfo = (req, res) => {
    var data = [];
    ChannelActivity.find({
        isExited: true
    }).exec(function (err, messages) {
        if (messages.length > 0) {
            messages.forEach((value) => {
                data.push({
                    name: value.name,
                    emailId: value.emailId,
                    exitTimestamp: value.exitTimestamp
                });
            })
            res.send({
                totalUsersDropped: messages.length,
                data: data
            })
        } else {
            res.send(messages);
        }
    })
};


/**
 * Retrieved all the users from Mongo DB
 */
var getAllUserInfo = (req, res) => {
    var data = [];
    ChannelActivity.find({}).exec(function (err, messages) {
        if (messages.length > 0) {
            messages.forEach((value) => {
                data.push({
                    name: value.name,
                    emailId: value.emailId,
                    joinedTimestamp: value.joinedTimestamp
                });
            })
            res.send({
                totalUsersDropped: messages.length,
                data: data
            })
        } else {
            res.send(messages);
        }
    })
};

/**
 * Retrieved all the users who has completed their chat from Mongo DB
 */
var getChatCompletedUserInfo = (req, res) => {
    var data = [];
    ChannelActivity.find({
        chatCompleted: true
    }).exec(function (err, messages) {
        if (messages.length > 0) {
            messages.forEach((value) => {
                data.push({
                    name: value.name,
                    emailId: value.emailId,
                    joinedTimestamp: value.joinedTimestamp
                });
            })
            res.send({
                totalUsersDropped: messages.length,
                data: data
            })
        } else {
            res.send(messages);
        }
    })
};


/**
 * Insert any activity performed by user in Mongo DB such as leave or join the chat conversation
 */
var insertActivity = (name, activityID, emailId, isJoined, joinedTimestamp, isExited, exitTimestamp, chatCompleted) => {

    ChannelActivity.find({
        emailId: emailId
    }).exec(function (err, data) {
        var data = JSON.parse(JSON.stringify(data));

        var activity = {
            activityID: activityID === undefined ? data[0].activityID : activityID,
            name: name === undefined ? data[0].name : name,
            emailId: emailId === undefined ? data[0].emailId : emailId,
            isJoined: isJoined === undefined ? data[0].isJoined : isJoined,
            joinedTimestamp: joinedTimestamp === undefined ? data[0].joinedTimestamp : joinedTimestamp,
            isExited: isExited === undefined ? data[0].isExited : isExited,
            exitTimestamp: exitTimestamp === undefined ? data[0].exitTimestamp : exitTimestamp,
            chatCompleted: chatCompleted === undefined ? data[0].chatCompleted : chatCompleted
        };

        ChannelActivity.findOneAndUpdate({
            emailId: emailId
        }, activity, {
            upsert: true
        }, function (err, doc) {
            if (err) console.log(err);
        });
    });

}

/**
 * Insert All the messages in Mongo DB
 */
var insertMessage = (name, messageId, emailId, message, userType, timestamp) => {
    var message = new Message({
        messageID: messageId,
        name: name,
        emailId: emailId,
        message: message,
        userType: userType,
        timestamp: timestamp
    });
    message.save((err) => {
        if (err)
            console.log(err);
    });
}

const registerNewUser = async (req, res, next) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        // Insert userData in user details mongodb collection
        const user = new UserDetails({
          username: req.body.username,
          password: hash,
        });
        user.save((err) => {
          if (err) {
          console.log(err);
          return res.redirect('/error');
           }
        });
        return res.redirect(307, "/chat");
    } catch(e) { 
        console.error(e);
        return res.redirect('/error');
    }
}

const submitFeedback = async (req, res, next) => {
    try {
        const { username, heading, description } = req.body;
        // Insert userData in user details mongodb collection
        const user = new FeedbackData({
          username,
          heading,
          description
        });
        user.save((err) => {
          if (err) {
          console.log(err);
          return res.redirect('/error');
           }
        });
        return  res.redirect('/');
    } catch(e) { 
        console.error(e);
        return res.redirect('/error');
    }
}

module.exports = {
    getAllMessages,
    insertMessage,
    insertActivity,
    getDroppedUserInfo,
    getAllUserInfo,
    getChatCompletedUserInfo,
    registerNewUser,
    submitFeedback,
};