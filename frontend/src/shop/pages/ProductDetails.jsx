import { useParams } from "react-router-dom";
import { useState } from "react";
import ShopLayout from "../layouts/ShopLayout";
import { products, productReviews, users } from "../../../dump-data";
import Carousel from "../../shared/components/Carousel";
import Rating from "../../shared/components/Rating";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const reviews = productReviews
    .filter((review) => review.productId === id)
    .map((review) => ({
      ...review,
      user: users.find((user) => user.id === review.userId),
    }));
  const carouselSlides = product.images.map((image) => ({
    img: image,
    alt: product.title,
  }));

  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ShopLayout>
      {/* product details */}
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/3 py-3 sm:h-auto">
          <Carousel slides={carouselSlides} />
        </div>
        {/* Product details */}
        <div className="p-3 w-full sm:w-1/3">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-gray-500 w-full">{product.description}</p>
        </div>
        {/* Cart */}
        <div className="w-full sm:w-1/3 border border-gray-300 p-3">
          <h1 className="text-3xl font-semibold">${product.price}</h1>
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
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg mt-4">
            Add to Cart
          </button>
        </div>
      </div>
      {/* reviews */}
      <div className="mt-4 sm:w-1/2 mx-auto">
        <h1 className="text-2xl font-semibold">Reviews</h1>
        {reviews.map((review, index) => (
          <div key={index} className="border border-gray-300 p-3 mt-3">
            <h3 className="text-xl font-semibold text-gray-500">
              {review.user?.name}
            </h3>
            <Rating rating={review.rating} />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </ShopLayout>
  );
};

export default ProductDetails;
