//Get Doctors For Users
const Doctor = require('../models/Doctor'); 


exports.DoctorsUser = async (req, res) => {
    try {
       
        const doctors = await Doctor.find();

        const locals = {
            title: 'TrustMed - DoctorsUser',
            description: 'HealthCare WebSite'
        };

      
        res.render('DoctorsUser', {
            userName: req.user.firstName,  
            doctors,  
            locals,  
            layout: '../views/layouts/DoctorsUserLay'  
        });
    } catch (err) {
        console.error('Error fetching doctors:', err);
        res.status(500).send('Error fetching doctors');
    }
};
