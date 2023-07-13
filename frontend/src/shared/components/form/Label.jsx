/* eslint-disable react/prop-types */
const Label = ({ text, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-gray-700 text-sm font-bold mb-2"
    >
      {text}
    </label>
  );
};

export default Label;
