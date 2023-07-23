import { Link, useParams } from "react-router-dom";
import Card from "../../shared/components/Card";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import ShopLayout from "../layouts/ShopLayout";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../api/product";
import Loader from "../../shared/components/Loader";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await getProductsByCategory(category);
      setProducts(data.products);
      setLoading(false);
    };

    fetchProducts();
  }, [category]);

  return (
    <ShopLayout>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex relative">
          <ProductFilterSidebar />
          <div className="w-full sm:w-3/4 flex flex-wrap justify-center items-start">
            {products.map((product) => (
              <Card
                key={product._id}
                data={{ ...product, image: product.cover_image }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">${product.price}</h3>
                  <div>
                    <Link
                      to={`/products/${product.name}`}
                      className="bg-indigo-500 text-white px-4 py-2 rounded-lg mr-2"
                    >
                      See Product
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </ShopLayout>
  );
};

export default ProductsList;
