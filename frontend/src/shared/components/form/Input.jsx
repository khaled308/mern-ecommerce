/* eslint-disable react/prop-types */
const Input = ({ className, id, value, type, placeholder, ...inputAttr }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        id={id}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
        placeholder={placeholder}
        value={value}
        {...inputAttr}
      />
    </div>
  );
};

export default Input;
