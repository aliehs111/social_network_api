const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social_network_api', {   
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',require('./routes'));


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
