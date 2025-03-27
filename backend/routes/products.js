const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const categoryController = require('../controllers/categoryController');
const multer = require('multer');

//Image storage Upload
const storage = multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=>{
    return cb(null,`${Date.now()}_${file.originalname}`)
  }
});
const upload = multer({storage:storage});
products.post("/add",upload.single("image"),addProducts);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);