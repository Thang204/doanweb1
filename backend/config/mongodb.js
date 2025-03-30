const mongoose = require('mongoose');


const connectDB =  async() => {
    await mongoose.connect('mongodb+srv://Admin:123@cluster0.21ylp.mongodb.net/e-commerce')
    .then(() => {
        console.log('Database connection successful');
    })
    .catch((err) => {
        console.error('Database connection error');
    })

}
module.exports = connectDB;


  
