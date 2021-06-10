const dbConfig = require('../config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {
    mongoose: mongoose, //
    url: dbConfig.url,
    users: require('./user.model')(mongoose),
    connect: function () {
        return new Promise((resolve, reject) => {
            this.mongoose.connect(this.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }, (err) => {
                if (err) return reject(err);
                return resolve("Connected to the Database");
            })
        })
    },
    close: function () {
        return this.mongoose.disconnect();
    }
}; //

module.exports = db;
