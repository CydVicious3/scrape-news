const mongoose = require("mongoose")

// Reference to the Schema constructor
const Schema = mongoose.Schema

// Create a new UserSchema object using the Schema constructor
// This is similar to a Sequelize model
const News = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    // required: true
  },
  link: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  saved: {
    type: Boolean, default: 'false'
  },
  date: {
    type: Date, default: Date.now
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

ArticleSchema.index({
  link: 1,
}, {
  unique: true,
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;


