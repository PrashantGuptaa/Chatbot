var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserDetail = new Schema({
    username: String,
    password: String
});
const passportLocalMongoose = require('passport-local-mongoose');
UserDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');

module.exports = UserDetails;
