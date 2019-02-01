const morgan = require('morgan');
const { json } = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);

const PORT = process.env.PORT || 7880;

app.use(morgan('dev'));
app.use(json());
app.use(cors());

app.use(express.static('client/dist'));

const healthCenter = require('./controllers/Health');

app.use('/api/v1/health-center', healthCenter);

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/dist/index.html'));
});

http.listen(PORT, () => console.log(`App running in port ${PORT}`));
