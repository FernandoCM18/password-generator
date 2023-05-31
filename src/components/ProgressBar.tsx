import React, { useState } from 'react';

interface Props {
  min?: number;
  max?: number;
  step?: number;
}
export const ProgressBar = ({min = 0, max = 100, step = 1}: Props) => {
  const [length, setLength] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(event.target.valueAsNumber);
  };

  const backgroundStyle = `linear-gradient(to right, rgb(29 78 216) 0%, rgb(29 78 216) ${((length - min) / (max - min)) * 100}%, #E2E8F0 ${((length - min) / (max - min)) * 100}%, #E2E8F0 100%)`;


  return (
    <div className="flex flex-col gap-4">
      <h3 className="flex justify-between items-center text-xl font-bold">
        Longitud de caràcter <span className="text-blue-700">{length}</span>
      </h3>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={length}
        onChange={handleChange}
        className="appearance-none w-full h-2 rounded-full outline-none accent-blue-700"
        style={{ background: backgroundStyle }}
      />
    </div>
    
  );
};
