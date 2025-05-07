//Get Dashboard
exports.dashboard = async (req,res) => {
    const locals = {
        title: 'TrustMed - Dashboard',
        description: 'HealthCare WebSite'
    }
    res.render('dashboard',{
        userName: req.user.firstName,
        locals,
        layout: '../views/layouts/dashboardLay'
    });
};
