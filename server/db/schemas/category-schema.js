const { Schema } = require('mongoose');

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'categorys',
    timestamps: true,
  },
);

module.exports = CategorySchema;
