const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;

// mongodb+srv://dbuser:admin2@cluster0.xb9nwrj.mongodb.net/?retryWrites=true&w=majority