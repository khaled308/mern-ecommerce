import { useState } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState(2.5);
  return (
    <div>
      <input
        id="steps-range"
        type="range"
        min={0}
        max={5}
        value={value}
        step={0.5}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default RangeSlider;
