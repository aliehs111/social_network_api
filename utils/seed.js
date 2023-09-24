// userSeeder.js

const mongoose = require('mongoose');
const User = require('../models/User'); // Import User model here
const Thought = require('../models/Thought'); // Import Thought model 
const { usersSeedData, thoughtsSeedData } = require('./data'); // Import seed data for users

// Connect to the database
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to seed the User collection
const seedUsers = async () => {
  try {
    // // Remove existing users (optional)
    // await User.deleteMany();

    // Insert seed data into the User collection
    await User.insertMany(usersSeedData);

    console.log('User seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding user data:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

// Seed the user data when this script is run
seedUsers();

//seed thought data
const seedThoughts = async () => {
  try {
    // // Remove existing thoughts (optional)
    // await Thought.deleteMany();

    // Insert seed data into the Thought collection
    await Thought.insertMany(thoughtsSeedData);

    console.log('Thought seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding thought data:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

seedThoughts();

//seed reactions
const seedReactions = async () => {
  try {
    // // Remove existing reactions (optional)
    // await Reaction.deleteMany();

    // Insert seed data into the Reaction collection
    await Reaction.insertMany(reactionsSeedData);

    console.log('Reaction seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding reaction data:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

seedReactions();
