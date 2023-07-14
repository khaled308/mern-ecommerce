import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import { products } from "../../../dump-data";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchedProduct = products.find((p) => p.id === id);
    setProduct(fetchedProduct);
  }, [id]);

  if (!product) {
    return (
      <AdminLayout>
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </AdminLayout>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full border border-gray-300 rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="font-medium">
              Description
            </label>
            <textarea
              id="description"
              className="w-full border border-gray-300 rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="w-full border border-gray-300 rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="font-medium">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="w-full border border-gray-300 rounded py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditProduct;
