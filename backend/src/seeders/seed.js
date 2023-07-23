require("dotenv").config();
const products = require("./products");
const users = require("./users");
const bcrypt = require("bcrypt");
const categories = require("./categories");
const reviews = require("./reviews");
const Product = require("../models/Product");
const User = require("../models/User");
const Category = require("../models/Category");
const Review = require("../models/Review");
const connectToDB = require("../config/db");

const seed = async () => {
  try {
    await connectToDB();

    await User.deleteMany({});
    const usersWithHashedPasswords = users.map((user) => ({
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    }));
    const createdUsers = await User.insertMany(usersWithHashedPasswords);
    console.log("Users added successfully");

    await Category.deleteMany({});
    const createdCategories = await Category.insertMany(categories);
    console.log("Categories added successfully");

    await Review.deleteMany({});
    const reviewsWithUsers = reviews.map((review, index) => {
      index = index % createdUsers.length;
      review.user = createdUsers[index]._id;
      return review;
    });
    const createdReviews = await Review.insertMany(reviewsWithUsers);
    console.log("Reviews added successfully");

    const productsWithCategories = products.map((product, index) => {
      index = index % createdCategories.length;
      product.category = createdCategories[index]._id;
      return product;
    });
    const productsWithReviews = productsWithCategories.map((product, index) => {
      index = index % createdReviews.length;
      product.reviews = [createdReviews[index]._id];
      return product;
    });
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(productsWithReviews);
    console.log("Products added successfully");

    return {
      users: createdUsers,
      categories: createdCategories,
      reviews: createdReviews,
      products: createdProducts,
    };
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    process.exit();
  }
};

seed();
