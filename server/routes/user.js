const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/', (req, res) => {
    res.send({name: "Success"});
    if (user) return res.sendStatus(200);
})

router.post('/add', userController.addUser);



module.exports = router;