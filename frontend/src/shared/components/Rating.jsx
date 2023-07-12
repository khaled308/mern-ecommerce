/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1 mb-5">
      {Array.from({ length: 5 }, (_, index) => {
        return (
          <AiFillStar
            key={index}
            className={index < rating ? "text-yellow-400" : "text-gray-300"}
          />
        );
      })}
    </div>
  );
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
