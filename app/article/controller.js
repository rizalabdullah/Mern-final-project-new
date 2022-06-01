const { ObjectId } = require("mongodb");
const path = require('path');
const fs = require('fs');
const config = require('../config');
const Article = require('./model');
// const Category = require('../category/model');

const store = async (req, res, next) => {
  try{
    let payload = req.body;

    // update karena relasi dengan category
    // if(payload.category){
    //   let category = 
    //     await Category
    //     .findOne({name: {$regex: payload.category, $options: 'i'}});
    //   if(category){ 
    //      payload = {...payload, category: category._id};
    //   } else {
    //      delete payload.category;
    //   }
    // }
   
    if(req.file){
       let tmp_path = req.file.path; 
       let originalExt = req.file.originalname.split('.')[req.file.originalname.split('.').length - 1];
      // let filename = req.file.filename + '.' + originalExt;
      let filename1 = req.file.originalname;
       let target_path = path.resolve(config.rootPath, `public/images/upload/${filename1}`);

       const src = fs.createReadStream(tmp_path);
       const dest = fs.createWriteStream(target_path);
       src.pipe(dest);

       src.on('end', async () => {
        try {

          let article = new Article({...payload, image_url: filename1})
          await article.save()
          return res.json(article);

        } catch(err){
          fs.unlinkSync(target_path);
          if(err && err.name === 'ValidationError'){
             return res.json({
               error: 1, 
               message: err.message, 
               fields: err.errors
             })
          }

          next(err);
        }
      });

      src.on('error', async() => {
         next(err);
      });

   } else {

      let article = new Article(payload);
      await article.save();
      return res.json(article);

   }
 } catch(err) {
   if(err && err.name === 'ValidationError'){
      return res.json({
        error: 1, 
        message: err.message, 
        fields: err.errors
      });
   }

   next(err);
 }
}

const update = async (req, res, next) => {
  try{
    let payload = req.body;
    let { id } = req.params;

    // if(payload.category){
    //   let category = 
    //     await Category
    //     .findOne({name: {$regex: payload.category, $options: 'i'}});
    //   if(category){ 
    //      payload = {...payload, category: category._id};
    //   } else {
    //      delete payload.category;
    //   }
    // }

    if(req.file){
       let tmp_path = req.file.path; 
       let originalExt = req.file.originalname.split('.')[req.file.originalname.split('.').length - 1];
      // let filename = req.file.filename + '.' + originalExt;
      let filename1 = req.file.originalname;
       let target_path = path.resolve(config.rootPath, `public/images/upload/${filename1}`);

       const src = fs.createReadStream(tmp_path);
       const dest = fs.createWriteStream(target_path);
       src.pipe(dest);

       src.on('end', async () => {
        try {

          let article = await Article.findById(id);
          // let currentImage = `${config.rootPath}/public/images/articles/${article.image_url}`;

          // hapus image lama
          
          // if(fs.existsSync(currentImage)) {
          //   fs.unlinkSync(currentImage);
          // }

          article = await Article.findByIdAndUpdate(id, {...payload, image_url: filename1}, {
            new: true,
            runValidators: true
          });
          return res.json(article);

        } catch(err){
          fs.unlinkSync(target_path);
          if(err && err.name === 'ValidationError'){
             return res.json({
               error: 1, 
               message: err.message, 
               fields: err.errors
             })
          }

          next(err);
        }
      });

      src.on('error', async() => {
         next(err);
      });

   } else {

      let article = await Article.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
      });
      return res.json(article);

   }
 } catch(err) {
   if(err && err.name === 'ValidationError'){
      return res.json({
        error: 1, 
        message: err.message, 
        fields: err.errors
      });
   }

   next(err);
 }
}

const index = async (req, res, next) => {
  try {

    const PAGE_SIZE = 10;
    const page = parseInt(req.query.page || "0");
    const total = await Article.countDocuments({});
    let article = await Article
    .find()
     .limit(PAGE_SIZE)
     .skip(PAGE_SIZE * page)
    // .populate('category');
    return res.json({
      data: article,
       totalPages: Math.ceil(total / PAGE_SIZE)
      
    });
  } catch (err) {
    next(err);
  }
}

const view = (req,res) => {
  const {id} = req.params;    
    Article.findOne({_id:ObjectId(id)})
    .then(result => res.send(result))
    .catch(error => res.send(error));
}

const destroy = async (req, res, next) => {
  try {
    let article = await Article.findByIdAndDelete(req.params.id);
    // let currentImage = `${config.rootPath}/public/images/articles/${article.image_url}`;
    // if(fs.existsSync(currentImage)){
    //   fs.unlinkSync(currentImage)
    // }

    return res.json(article);
  } catch(err) {
    next(err);
  }
}

module.exports = {
  store,
  index,
  view,
  update,
  destroy
}