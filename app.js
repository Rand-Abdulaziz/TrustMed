require('dotenv').config();  


const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const User = require('./server/models/User');  
const doctorsRoutes = require('./server/models/Doctor'); 


const app = express();
const port = process.env.PORT || 5000;



mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));



app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI  
    }),
}));

//Passport
app.use(passport.initialize());
app.use(passport.session());


require('./server/config/passport'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));
app.use('/', require('./server/routes/aboutUser'));
app.use('/', require('./server/routes/DoctorsUser')); 
app.use('/', require('./server/routes/ReviewUser'));
app.use('/', require('./server/routes/ContactUser'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});









//Cloud
// require('dotenv').config();

// const express = require('express');
// const expressLayouts = require('express-ejs-layouts');
// const connectDB = require('./server/config/db');
// const session = require('express-session');
// const passport = require('passport');
// const MongoStore = require('connect-mongo');


// const app = express();
// const port = process.env.PORT || 5000;

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({
//       mongoUrl: process.env.MONGODB_URI
//     }),
    
//   }));

// app.use(passport.initialize());
// app.use(passport.session());

// // Conntect to Database
// // connectDB(); 

// app.use(session({
//     secret:'keyboard car',
//     resave:false,
//     saveUninitialized:true,
//     store: MongoStore.create({
//       mongoUrl: process.env.MONGODB_URI
//     }),
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(express.urlencoded({extended : true}));
// app.use(express.json());

// //Static Files
// app.use(express.static('public'));

// //Tamplating Engine
// app.use(expressLayouts);
// app.set('layout','./layouts/main');
// app.set('view engine', 'ejs');

// //Routes
// app.use('/',require('./server/routes/auth'));
// app.use('/',require('./server/routes/index'));
// app.use('/',require('./server/routes/dashboard'));
// app.use('/',require('./server/routes/aboutUser'));
// app.use('/',require('./server/routes/DoctorsUser'));
// app.use('/',require('./server/routes/ReviewUser'));
// app.use('/',require('./server/routes/ContactUser'));


// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// });