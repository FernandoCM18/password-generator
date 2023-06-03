import React, { useState } from 'react';
import { useData } from '../hooks/useData';

interface Props {
  min?: number;
  max?: number;
  step?: number;
}
export const ProgressBar = ({min = 0, max = 100, step = 1}: Props) => {
  const {lengthPassword, setLengthPassword} = useData();

  const [length, setLength] = useState(lengthPassword);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(event.target.valueAsNumber);
    setLengthPassword(event.target.valueAsNumber);
  };

  const backgroundStyle = `linear-gradient(to right, #2563eb 0%, #2563eb ${((length - min) / (max - min)) * 100}%, #f3f4f6 ${((length - min) / (max - min)) * 100}%, #f3f4f6 100%)`;


  return (
    <div className="flex flex-col gap-4">
      <h3 className="flex justify-between items-center text-xl font-bold dark:text-slate-100">
        Longitud de caràcter <span className="text-blue-600">{length}</span>
      </h3>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={length}
        onChange={handleChange}
        className="appearance-none w-full h-2 rounded-full outline-none accent-blue-600"
        style={{ background: backgroundStyle }}
      />
    </div>
    
  );
};
