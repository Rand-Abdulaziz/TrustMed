//Get Contact For Users
exports.ContactUser = async (req,res) => {
    const locals = {
        title: 'TrustMed - ContactUser',
        description: 'HealthCare WebSite'
    }
    res.render('ContactUser',{
        userName: req.user.firstName,
        locals,
        layout: '../views/layouts/ContactUserLay'
    });
};
