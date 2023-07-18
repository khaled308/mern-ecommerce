require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  jwtSecret: process.env.JWT_SECRET,
  node_env: process.env.ENV,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  clientDevUrl: process.env.CLIENT_DEV_URL,
  clientProdUrl: process.env.CLIENT_PROD_URL,
};
