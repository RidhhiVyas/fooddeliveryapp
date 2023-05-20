const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://cluster0:Mern123@cluster0.79atrgb.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }); // Corrected connection options
    console.log('Connected to MongoDB');
    const fetched_data = await mongoose.connection.db.collection('fooditems');
    const data= await fetched_data.find({}).toArray(); 
        console.log();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDB;


