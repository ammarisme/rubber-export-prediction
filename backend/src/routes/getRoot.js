'use strict';

const express = require('express');
const getAppInfo = require('../services/getAppInfo');
const router = new express.Router();
const userController = require('../controllers/userController')
const predictionController = require('../controllers/predictionController')
const parameterController = require('../controllers/parameterController')

router.get('/', async (request, response) => {
  const appInfo = await getAppInfo();
  response.status(200).json({
    title: appInfo.title,
    environment: appInfo.environment,
    version: appInfo.version,
    commit: appInfo.commit,
    build: appInfo.build,
  });
});

router.get('/', async (request, response) => {
  const appInfo = await getAppInfo();
  response.status(200).json({
    title: appInfo.title,
    environment: appInfo.environment,
    version: appInfo.version,
    commit: appInfo.commit,
    build: appInfo.build,
  });
});


router.get('/get-predictions/:year', async (request, response) => {
  let preds  = await predictionController.getPredictions(request.params.year)
  return response.status(200).json({
    data : preds
  });
});

router.get('/get-parametervalues/:parameter/:year', async (request, response) => {
  let preds  = await parameterController.getYearlyParameterValues(request.params.parameter, request.params.year)
  return response.status(200).json({
    data : preds
  });
});

router.get('/get-parameterValuesForMonth/:year/:month', async (request, response) => {
  let values  = await parameterController.getParameterValuesForMonth("1", request.params.year, request.params.month)
  return response.status(200).json({
    data : values
  });
});


module.exports = router;
