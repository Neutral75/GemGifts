const mongoose = require('mongoose');

const user = new mongoose.Schema({
    avatar: {
        type: String
    },

    id: {
        type: String
    },

    email: {
        type: String
    },

    points: {
        type: Number,
        default: 0
    },

    surveys: {
        type: Number,
        default: 0
    },

    premium: {
        type: Boolean,
        default: false
    },

    date: {
        type: String
    }
});

module.exports = mongoose.model('user', user);