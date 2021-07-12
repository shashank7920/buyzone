const Category = require("../models/category");

const categoryController = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  createCategoty: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category.findOne({ name });
      if (category)
        return res.status(400).json({ msg: "This category already exists." });

      const newCategory = new Category({ name });

      await newCategory.save();
      res.json({ msg: "Created a category" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      console.log("Hello here");
      await Category.findByIdAndDelete(req.params.id);

      res.json({ msg: "Deleted a Category" });
    } catch (err) {
      res.status(500).json({ msg: "See here" });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.findByIdAndUpdate({ _id: req.params.id }, { name });

      res.json({ msg: "Updated the category" });
    } catch (err) {
      res.json({ err: err.message });
    }
  },
};

module.exports = categoryController;
