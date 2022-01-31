const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  business: { type: String, required: true },
  comment: { type: String, required: true },
});
Form = mongoose.model("Form", formSchema);
module.exports = Form;
