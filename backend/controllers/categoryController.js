const Category = require('../models/Category');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get category by ID
exports.getCategoryById = async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ msg: 'Category not found' });
      }
      res.json(category);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Category not found' });
      }
      res.status(500).send('Server error');
    }
  };

  // Create a category
exports.createCategory = async (req, res) => {
    try {
      const newCategory = new Category(req.body);
      const category = await newCategory.save();
      res.json(category);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
  // Update a category
  exports.updateCategory = async (req, res) => {
    try {
      let category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ msg: 'Category not found' });
      }
  
      category = await Category.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json(category);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Category not found' });
      }
      res.status(500).send('Server error');
    }
  };
  
  
  // Delete a category
  exports.deleteCategory = async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ msg: 'Category not found' });
      }
  
      await category.deleteOne();
      res.json({ msg: 'Category removed' });
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Category not found' });
      }
      res.status(500).send('Server error');
    }
  };
  