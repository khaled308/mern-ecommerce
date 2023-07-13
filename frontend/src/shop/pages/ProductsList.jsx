import { Link } from "react-router-dom";
import { products } from "../../../dump-data";
import Card from "../../shared/components/Card";
import ProductFilterSidebar from "../components/ProductFilterSidebar";
import ShopLayout from "../layouts/ShopLayout";

const ProductsList = () => {
  return (
    <ShopLayout>
      <div className="flex relative">
        <ProductFilterSidebar />
        <div className="w-full sm:w-3/4 flex flex-wrap justify-center">
          {products.map((product) => (
            <Card
              key={product.id}
              data={{ ...product, image: product.cover_image }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">${product.price}</h3>
                <div>
                  <Link
                    to={`/products/${product.id}`}
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
    </ShopLayout>
  );
};

export default ProductsList;
