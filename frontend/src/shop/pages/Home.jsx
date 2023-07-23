/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../../shared/components/Card";
import Carousel from "../../shared/components/Carousel";
import ShopLayout from "../layouts/ShopLayout";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/category";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);
  return (
    <ShopLayout>
      <Carousel
        slides={categories.map((category) => ({
          img: category.cover_image,
          alt: category.name,
        }))}
      />
      <div className="flex flex-wrap justify-center mt-8">
        {categories.map((category) => (
          <Card
            key={category._id}
            data={{
              title: category.name,
              description: category.description,
              image: category.cover_image,
            }}
          >
            <Link
              to={`/${category.name}/products`}
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
