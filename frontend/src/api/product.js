import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get("/products/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`/categories/${category}/products`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByName = async (name) => {
  try {
    const response = await axios.get(`/products/product-name/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
