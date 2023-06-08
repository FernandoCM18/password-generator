interface Props {
  uppercase: boolean; 
  lowercase: boolean; 
  numbers: boolean; 
  symbols: boolean; 
  changeUppercase: () => void;
  changeLowercase: () => void;
  changeNumbers: () => void;
  changeSymbols: () => void;
}

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

export const Options = ({
  uppercase,
  lowercase,
  numbers,
  symbols,
  changeUppercase,
  changeLowercase,
  changeNumbers,
  changeSymbols
}: Props) => {

  return (
    <div className="flex flex-col space-y-2">
      {
        OPTIONS.map((option) => (
          <label htmlFor={option.name} className="label-color" key={option.name}>
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
