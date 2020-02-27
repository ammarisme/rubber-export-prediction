const predictionController = new Object();
const Predictions = require('../models/prediction-model')



predictionController.getPredictions = function (year){
  predictions = Predictions.find({year : year},
    {month: 1, year: 1,
      fitted: 1 ,
      actual: 1 ,
      fitted_std: 1,
      actual_std: 1})
  return predictions;
}

module.exports = predictionController;
