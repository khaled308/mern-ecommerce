const Product = require("../models/Product");
const { uploadFiles } = require("../services/fileUpload");
const ApiFeatures = require("../utils/ApiFeatures");

exports.getProducts = async (req, res) => {
  const documentsCount = await Product.countDocuments();
  let mongoQuery = Product.find({});
  const apiFeatures = new ApiFeatures(mongoQuery, req.query)
    .paginate(documentsCount)
    .sort()
    .filter()
    .filterByCategory();

  const products = await apiFeatures.mongooseQuery;
  res.status(200).json({
    products,
    pagination: apiFeatures.pagination,
  });
};

exports.getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json(product);
};

exports.createProduct = async (req, res) => {
  const selected = ["name", "price", "category", "description", "stock"];
  const productData = {};
  selected.forEach((el) => {
    if (req.body[el]) productData[el] = req.body[el];
  });
  const { cover_image, images } = await uploadFiles(req.files);
  productData.cover_image = cover_image[0];
  productData.images = images;
  const product = await Product.create(productData);

  res.status(201).json(product);
};

exports.getBestSellingProducts = async (req, res) => {
  const products = await Product.aggregate([
    {
      $sort: {
        sales: -1,
        category: 1,
      },
    },
    { $group: { _id: "$category", doc_with_max_sales: { $first: "$$ROOT" } } },
    { $replaceRoot: { newRoot: "$doc_with_max_sales" } },
    { $limit: 3 },
  ]);

  res.status(200).json(products);
};

exports.updateProduct = async (req, res) => {
  const selected = [
    "name",
    "price",
    "category",
    "cover_image",
    "description",
    "images",
  ];

  const productData = {};
  selected.forEach((el) => {
    if (req.body[el]) productData[el] = req.body[el];
  });

  const product = await Product.findByIdAndUpdate(req.params.id, productData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).json({ message: "Product deleted successfully" });
};
