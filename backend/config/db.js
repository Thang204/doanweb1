const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Admin:123@cluster0.21ylp.mongodb.net/products')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
        
  
