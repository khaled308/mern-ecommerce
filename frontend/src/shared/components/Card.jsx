/* eslint-disable react/prop-types */
const Card = ({ data, children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mx-4 my-4 max-w-xs">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-32 object-cover mb-4 rounded-md"
        crossOrigin="anonymous"
      />
      <div className="p-2">
        <h3 className="text-xl font-semibold">{data.title}</h3>
        <p className="text-gray-500 line-clamp-2">{data.description}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
