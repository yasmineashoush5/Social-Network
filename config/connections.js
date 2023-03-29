const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongoose.connect('mongodb://127.0.0.1:27017/socialnetwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;