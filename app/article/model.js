const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const articleSchema = Schema({

  name: {
    type: String, 
    minlength: [3, 'Panjang nama makanan minimal 3 karakter'],
    required: [true, 'Nama makanan harus diisi']
  },

  description: {
    type: String
  }, 

  full_name: {
    type: String
  },
  author: {
    type: String
  },

  image_url: String,

  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Category'
  // }

  // tags: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Tag'
  //   }
  // ]

}, { timestamps: true });

const Article = model('Article', articleSchema);

module.exports = Article;