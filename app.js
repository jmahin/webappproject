
const express = require('express');
const morgan = require('morgan');
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const PORT = 3000;
const router = express.Router();

// Routes
const indexRoutes = require('./routes/index-routes.js');

module.exports = router;

app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.json());

app.use('/', indexRoutes);
// app.use('/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`The local host URL is http://localhost:${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/markettproject');

mongoose.connect(
    `mongodb+srv://jmahin:7q2gWgue2am2FMfY@Cluster0.mongodb.net/markettproject?retryWrites=true&w=majority`
);