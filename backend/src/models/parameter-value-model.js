const mongoose = require("../database");
const schema = {
  value: { type: mongoose.SchemaTypes.Number, required: true },
  parameter: { type: mongoose.SchemaTypes.String, required: true },
  year: {
    type: mongoose.SchemaTypes.String,
    required: true,
    select: false
  },
  month: {
    type: mongoose.SchemaTypes.String,
    required: true,
    select: false
  },
  value_std: {
    type: mongoose.SchemaTypes.Number,
    required: true,
    select: false
},
};
const collectionName = "parameter_values"; // Name of the collection of documents
const mySchema = mongoose.Schema(schema);
const ParameterValues = mongoose.model(collectionName, mySchema);


module.exports = ParameterValues;
