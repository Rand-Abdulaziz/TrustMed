//Get Doctors For Users
exports.DoctorsUser = async (req,res) => {
    const locals = {
        title: 'TrustMed - DoctorsUser',
        description: 'HealthCare WebSite'
    }
    res.render('DoctorsUser',{
        userName: req.user.firstName,
        locals,
        layout: '../views/layouts/DoctorsUserLay'
    });
};
