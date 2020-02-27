const parameterController = new Object();
const ParameterValues = require('../models/parameter-value-model');
const Predictions = require('../models/prediction-model');

parameterController.getYearlyParameterValues = function ( parameterName , year){
  let values = ParameterValues.find({year : year, parameter : parameterName},
    {year : 1, month: 1, parameter: 1, value: 1,  value_std: 1}
    );
  return values;
}

parameterController.getParameterValuesForMonth = function ( modelId,  year, month){
  let values = ParameterValues.find({year : year, month: month},
    {year : 1, month: 1, parameter: 1, value: 1, value_std: 1}
  );

  return values;
}

module.exports = parameterController;
