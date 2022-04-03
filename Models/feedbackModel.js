var mongoose = require('mongoose');

var FeedbackData = mongoose.model('feedbackData', {
    username: String,
    heading: String,
    description: String,
});

module.exports = FeedbackData;