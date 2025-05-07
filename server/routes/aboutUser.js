const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware/checkAuth');
const aboutUserController = require('../controllers/aboutUserController');



router.get('/aboutUser',isLoggedIn,aboutUserController.aboutUser);


module.exports = router;