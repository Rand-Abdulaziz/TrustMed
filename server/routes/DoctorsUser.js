const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware/checkAuth');
const DoctorsUserController = require('../controllers/DoctorsUserController');



router.get('/DoctorsUser',isLoggedIn,DoctorsUserController.DoctorsUser);


module.exports = router;