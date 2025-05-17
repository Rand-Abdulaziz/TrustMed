
const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const dashboardController = require('../controllers/dashboardController');
const Report = require('../models/Report');

router.use((req, res, next) => {
    console.log('✅ Session user:', req.user);
    next();
});


// Original dashboard page
router.get('/dashboard', isLoggedIn, dashboardController.dashboard);

// Display Generate Report Form
router.get('/dashboard/generate-report', isLoggedIn, (req, res) => {
    res.render('generateReport', {
        user: req.user,
        layout: '../views/layouts/dashboardLay'
    });
});

// Handle Report Submission with Log
router.post('/dashboard/generate-report', isLoggedIn, async (req, res) => {
    const { receiverEmail, message } = req.body;
    const senderEmail = req.user.email;

    const newReport = new Report({ senderEmail, receiverEmail, message });
    await newReport.save();

    console.log(`✅ Report saved! Sender: ${senderEmail}, Receiver: ${receiverEmail}, Message: ${message}`);

    res.redirect('/dashboard/my-reports');
});

// Display Received Reports with Log
router.get('/dashboard/my-reports', isLoggedIn, async (req, res) => {
    console.log(`🔍 Fetching reports for: ${req.user.email}`);
    const reports = await Report.find({ receiverEmail: req.user.email });
    res.render('myReports', {
        user: req.user,
        reports,
        layout: '../views/layouts/dashboardLay'
    });
});

module.exports = router;


