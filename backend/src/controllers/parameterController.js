const predictionController = new Object();
const Predictions = require('../models/prediction-model')



predictionController.getPredictions = function (year){
  predictions = Predictions.find({year : year})
  return predictions;
}

module.exports = predictionController;
