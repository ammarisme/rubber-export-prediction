const mongoose = require("../database");
const schema = {
  actual: { type: mongoose.SchemaTypes.String, required: true },
  fitted: { type: mongoose.SchemaTypes.String, required: true },
  actual_std: { type: mongoose.SchemaTypes.String, required: true },
  fitted_std: { type: mongoose.SchemaTypes.String, required: true },
  year: {
    type: mongoose.SchemaTypes.String,
    required: true,
    select: false
  },
  month: {
    type: mongoose.SchemaTypes.String,
    required: true,
    select: false
  }
};
const collectionName = "predictions"; // Name of the collection of documents
const mySchema = mongoose.Schema(schema);
const Predictions = mongoose.model(collectionName, mySchema);

module.exports = Predictions;
