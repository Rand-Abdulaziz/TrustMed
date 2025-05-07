//Get About For Users
exports.aboutUser = async (req,res) => {
    const locals = {
        title: 'TrustMed - AboutUser',
        description: 'HealthCare WebSite'
    }
    res.render('aboutUser',{
        userName: req.user.firstName,
        locals,
        layout: '../views/layouts/aboutUserLay'
    });
};
