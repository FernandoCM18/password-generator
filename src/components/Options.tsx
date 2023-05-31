
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
    label: 'Incluye letras numeros.'
  },
  {
    name: 'symbols',
    label: 'Incluye letras simbolos.'
  }
];
export const Options = () => {
  


  return (
    <div className="flex flex-col">
      {
        OPTIONS.map((option) => (
          <label htmlFor={option.name} className="text-gray-500" key={option.name}>
            <input 
              className="form-checkbox rounded text-blue-700 border-2 mr-2 focus:ring-0" 
              type="checkbox" 
              name={option.name} 
              id={option.name}
            />
            {option.label}
          </label>
        ))
      }
    </div>
  );
};
