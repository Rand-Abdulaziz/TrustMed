const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware/checkAuth');
const ContactUserController = require('../controllers/ContactUserController');



router.get('/ContactUser',isLoggedIn,ContactUserController.ContactUser);


module.exports = router;