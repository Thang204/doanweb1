const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const categoryController = require('../controllers/categoryController');
const multer = require('multer');


router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);


module.exports = router;