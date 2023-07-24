import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShopLayout from "../layouts/ShopLayout";
import Carousel from "../../shared/components/Carousel";
import Rating from "../../shared/components/Rating";
import Loader from "../../shared/components/Loader";
import { getProductByName } from "../../api/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductDetails = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const data = await getProductByName(productName);
      setLoading(false);
      setProduct(data);
      setQuantity(
        cartItems.find((item) => item._id === data._id)?.quantity || 1
      );
    };
    fetchProduct();
  }, [productName]);
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(quantity);
    dispatch(addToCart({ ...product, quantity }));
  };
  return (
    <ShopLayout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/3 py-3 sm:h-auto">
              <Carousel
                slides={product?.images?.map((img) => ({
                  img,
                  alt: product?.name,
                }))}
              />
            </div>
            {/* Product details */}
            <div className="p-3 w-full sm:w-1/3">
              <h1 className="text-3xl font-semibold">
                {product?.name.replace(/-+/g, " ")}
              </h1>
              <p className="text-gray-500 w-full">{product?.description}</p>
            </div>
            {/* Cart */}
            <div className="w-full sm:w-1/3 border border-gray-300 p-3">
              <h1 className="text-3xl font-semibold">${product?.price}</h1>
              <div className="flex items-center mt-4">
                <button
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg mr-2"
                  onClick={handleDecreaseQuantity}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg ml-2"
                  onClick={handleIncreaseQuantity}
                >
                  +
                </button>
              </div>
              <button
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg mt-4"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
          {/* reviews */}
          <div className="mt-4 sm:w-1/2 mx-auto">
            <h1 className="text-2xl font-semibold">Reviews</h1>
            {product?.reviews.map((review, index) => (
              <div key={index} className="border border-gray-300 p-3 mt-3">
                <h3 className="text-xl font-semibold text-gray-500">
                  {review.user?.name}
                </h3>
                <Rating rating={review.rating} />
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </ShopLayout>
  );
};

export default ProductDetails;
