const mongoose = require('mongoose');
const User = require('../models/index').users;

module.exports.addUser =  async function(req,res) {
    const user = req.body.user; 
    const userDoc = new User(user);
    if (Object.keys(user).length ===0) return res.sendStatus(400);
    let result = await userDoc.save();
    console.log(result);
    return result;
}