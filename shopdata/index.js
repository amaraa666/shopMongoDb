


const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 6060;

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('database connected successfully'))
    .catch(err => console.error(err));

const usersRouter = require("./routes/users.route.js");
const productsRouter = require('./routes/product.route.js');
const menusRouter = require('./routes/menu.route.js');
const categoriesRouter = require('./routes/category.route.js');
const adminRouter = require('./routes/adminUsers.js');
const BrandRouter = require('./routes/brand.route.js');
const OrderRouter = require('./routes/order.route.js');

app.use(express.json());
app.use(cors());


app.use('/api', usersRouter);
app.use('/api', productsRouter);
app.use('/api', menusRouter);
app.use('/api', categoriesRouter);
app.use('/api', adminRouter);
app.use('/api', BrandRouter);
app.use('/api', OrderRouter);


app.listen(PORT, () => {
    console.log('server is running' + PORT);
});




