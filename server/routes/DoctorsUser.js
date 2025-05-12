const express = require('express');
const Doctor = require('../models/Doctor');  
const router = express.Router();

// Dispaly
router.get('/DoctorsUser', async (req, res) => {
  try {
    const doctors = await Doctor.find();  

    res.render('DoctorsUser', {
      doctors,  
      userName: req.user ? req.user.firstName : 'Guest',  
      locals: {
        title: 'TrustMed - DoctorsUser',
        description: 'HealthCare WebSite'
      },
      layout: '../views/layouts/DoctorsUserLay'  
    });
  } catch (err) {
    console.error('Error fetching doctors:', err);
    res.status(500).send('Error fetching doctors');
  }
});



module.exports = router;
 
router.get('/DoctorsUser/search', async (req, res) => {
  const { name, specialty, area } = req.query;

  try {
    const query = {};
    if (name) query.name = { $regex: name, $options: 'i' };
    if (specialty) query.specialty = { $regex: specialty, $options: 'i' };
    if (area) query.area = { $regex: area, $options: 'i' };

    const doctors = await Doctor.find(query);  

    res.render('DoctorsUser', {
      doctors,  
      userName: req.user ? req.user.firstName : 'Guest',
      locals: {
        title: 'TrustMed - DoctorsUser',
        description: 'HealthCare WebSite'
      },
      layout: '../views/layouts/DoctorsUserLay'
    });
  } catch (err) {
    console.error('Error fetching doctors:', err);
    res.status(500).send('Error fetching doctors');
  }
});
