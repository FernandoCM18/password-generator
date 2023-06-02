import { useData } from '../hooks/useData';
import { generatePassword } from '../helpers/generatePassword';

interface Props {
  name: string;
}
export const Button = ({name}: Props) => {
  const {lengthPassword, uppercase, lowercase, numbers, symbols, setPassword } = useData();  
  const handleClick = () => {
    const password = generatePassword({
      length: lengthPassword,
      uppercase,
      lowercase,
      numbers,
      symbols
    });
    setPassword(password);
  };


  return (
    <button 
      className="bg-blue-700 text-white font-bold w-full p-4 disabled:bg-gray-200 dark:disabled:bg-slate-800 disabled:text-gray-500 dark:disabled:text-slate-600 dark:disabled:opacity-60 disabled:cursor-not-allowed"
      onClick={handleClick}
      disabled={lengthPassword === 0 || uppercase === false && lowercase === false && numbers === false && symbols === false }
    >
      {name}
    </button>
  );
};
