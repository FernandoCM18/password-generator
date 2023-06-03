import { useData } from '../hooks/useData';

const OPTIONS = [
  {
    name: 'uppercase',
    label: 'Incluye letras mayúsculas.'
  },
  {
    name: 'lowercase',
    label: 'Incluye letras minusculas.'
  },
  {
    name: 'numbers',
    label: 'Incluye numeros.'
  },
  {
    name: 'symbols',
    label: 'Incluye simbolos.'
  }
];
export const Options = () => {
  const { uppercase, lowercase, numbers, symbols, changeUppercase, changeLowercase, changeNumbers, changeSymbols} = useData();

  return (
    <div className="flex flex-col">
      {
        OPTIONS.map((option) => (
          <label htmlFor={option.name} className="text-gray-500 dark:text-slate-400" key={option.name}>
            <input 
              className="form-checkbox rounded text-blue-600 border-2 mr-2 focus:ring-0" 
              type="checkbox" 
              name={option.name}
              checked={option.name === 'uppercase' ? uppercase : option.name === 'lowercase' ? lowercase : option.name === 'numbers' ? numbers : symbols}
              onChange={option.name === 'uppercase' ? changeUppercase : option.name === 'lowercase' ? changeLowercase : option.name === 'numbers' ? changeNumbers : changeSymbols}
              id={option.name}
            />
            {option.label}
          </label>
        ))
      }
    </div>
  );
};
