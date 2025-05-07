//Get Homepage
exports.homepage = async (req,res) => {
    const locals = {
        title: 'TrustMed',
        description: 'HealthCare WebSite'
    }
    res.render('index',{
        locals,
        layout: '../views/layouts/front-page'
    });
};

//Get About
exports.about = async (req,res) => {
    const locals = {
        title: 'About - TrustMed',
        description: 'HealthCare WebSite',
    }
    res.render('about',locals);

};

//Get Doctors
exports.Doctors = async (req,res) => {
    const locals = {
        title: 'Doctors - TrustMed',
        description: 'HealthCare WebSite'
    }
    res.render('Doctors',locals);
};

//Get Review
exports.Review = async (req,res) => {
    const locals = {
        title: 'Review - TrustMed',
        description: 'HealthCare WebSite'
    }
    res.render('Review',locals);
};

//Get Contact
exports.Contact = async (req,res) => {
    const locals = {
        title: 'Contact - TrustMed',
        description: 'HealthCare WebSite'
    }
    res.render('Contact',locals);
};