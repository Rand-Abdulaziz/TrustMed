//Localy
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TestDB')
  .then(() => {
    console.log('Connected to local MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err);
  });


//Cloud

// const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);
// const connectDB = async() => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`Database Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//   }
// }
// module.exports = connectDB;

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/TestDB', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to local MongoDB');
//   })
//   .catch(err => {
//     console.error('Failed to connect to MongoDB:', err);
//   });
