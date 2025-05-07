const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware/checkAuth');
const ReviewUserController = require('../controllers/ReviewUserController');



router.get('/ReviewUser',isLoggedIn,ReviewUserController.ReviewUser);


module.exports = router;