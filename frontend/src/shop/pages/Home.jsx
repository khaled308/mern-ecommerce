/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { categories, slides } from "../../../dump-data";
import Card from "../../shared/components/Card";
import Carousel from "../../shared/components/Carousel";
import ShopLayout from "../layouts/ShopLayout";
import { Link } from "react-router-dom";
import { getProducts } from "../../api/product";

const Home = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      console.log(data);
    };
    fetchProducts();
  }, []);
  return (
    <ShopLayout>
      <Carousel slides={slides} />
      <div className="flex flex-wrap justify-center mt-8">
        {categories.map((category) => (
          <Card key={category.id} data={category}>
            <Link
              to={`/shop/products?category=${category.id}`}
              className="block text-center text-white bg-blue-500 hover:bg-blue-600 py-2 rounded-md"
            >
              See Products
            </Link>
          </Card>
        ))}
      </div>
    </ShopLayout>
  );
};

export default Home;
