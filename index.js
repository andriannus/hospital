const morgan = require('morgan');
const { json } = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();
const http = require('http').Server(app);

const PORT = process.env.PORT || 7880;

app.use(morgan('dev'));
app.use(json());
app.use(cors());

// Load Controller files
const healthCenter = require('./controllers/Health');

app.use('/api/v1/health-center', healthCenter);

http.listen(PORT, () => console.log(`App running in port ${PORT}`));
