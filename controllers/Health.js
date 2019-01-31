const axios = require('axios');
// const { forEach } = require('lodash');
const { Router } = require('express');

const token = '6b36dc2dd025111ba65c469fbef24ac432ba2aab39dd1e949cfedcf22c31cfe6';

axios.defaults.baseURL = 'https://api.latest.medigo.id/user/';
axios.defaults.headers.common['X-Medigo-Client-Id'] = token;

const router = Router();

router.get('/', (req, res) => {
  axios.get('/health-center')
    .then((result) => {
      res.status(200).send({
        status: 200,
        success: true,
        message: 'Success',
        data: result.data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 500,
        success: true,
        message: 'Error',
        error,
      });
    });
});

router.get('/result', (req, res) => {
  const { search } = req.query;
  const { page } = req.query || 1;

  axios.get(`/health-center?search=${search}&page=${page}`)
    .then((result) => {
      res.status(200).send({
        status: 200,
        success: true,
        message: 'Success',
        data: result.data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 500,
        success: false,
        message: 'Error',
        error,
      });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  axios.get(`/health-center/${id}`)
    .then((result) => {
      res.status(200).send({
        status: 200,
        success: true,
        message: 'Success',
        data: result.data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 500,
        success: true,
        message: 'Error',
        error,
      });
    });
});

module.exports = router;
