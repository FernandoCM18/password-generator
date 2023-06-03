import { useState } from 'react';

interface Props {
  activeCount: number;
  message?: string;
}

export const SecurityLevel = ({activeCount, message}: Props) => {
  const [totalBars] = useState(4);

  const activeColor = 'text-gray-500 dark:text-slate-300';
  const inactiveColor = 'text-gray-300 dark:text-slate-500';

  const bars = Array.from({ length: totalBars }, (_, index) => (
    <rect
      key={index}
      x={(index + 1) * 5}
      y={2.25 + (16 - index * 3)}
      width="3"
      height={3 + index * 3}
      className={`fill-current ${index < activeCount ? activeColor : inactiveColor}`}
    />
  ));

  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-slate-800 p-4">
      <p className="text-gray-500 dark:text-slate-500">Nivel de seguridad: <span className="font-bold">{message}</span></p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9 -mt-4">
        {bars}
      </svg>
    </div>
  );
};
