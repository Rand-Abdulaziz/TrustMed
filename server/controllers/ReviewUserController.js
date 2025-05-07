//Get Review For Users
exports.ReviewUser = async (req,res) => {
    const locals = {
        title: 'TrustMed - ReviewUser',
        description: 'HealthCare WebSite'
    }
    res.render('ReviewUser',{
        userName: req.user.firstName,
        locals,
        layout: '../views/layouts/ReviewUserLay'
    });
};
