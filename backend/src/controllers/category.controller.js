const asyncErrorHandler = require("../utils/asyncErrorHandler");
const Category = require("../models/Category");

exports.getCategories = asyncErrorHandler(async (req, res, next) => {
  const categories = await Category.find({}).sort({ name: "asc" });
  res.status(200).json(categories);
});

exports.createCategory = asyncErrorHandler(async (req, res, next) => {
  const category = await Category.create({
    ...req.body,
    name: req.body.name.toLowerCase().replace(/\s+/g, "-"),
  });
  res.status(201).json(category);
});

exports.getCategory = asyncErrorHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return res.status(404).json({ message: "Category does not exist" });
  }
  res.status(200).json(category);
});

exports.updateCategory = asyncErrorHandler(async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!category) {
    return res.status(404).json({ message: "Category does not exist" });
  }

  res.status(200).json(category);
});

exports.deleteCategory = asyncErrorHandler(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    return res.status(404).json({ message: "Category does not exist" });
  }
  res.status(200).json({ message: "Category deleted successfully" });
});

exports.saveAttr = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const { attrs } = req.body;

  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category does not exist" });
    }

    attrs.forEach(({ name, values }) => {
      const foundIndex = category.attrs.findIndex((attr) => attr.name === name);
      if (foundIndex !== -1) {
        const uniqueValues = new Set([
          ...category.attrs[foundIndex].values,
          ...values,
        ]);
        category.attrs[foundIndex].values = Array.from(uniqueValues);
      } else {
        category.attrs.push({ name, values });
      }
    });

    await category.save();

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
