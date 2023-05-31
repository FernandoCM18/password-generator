import { shallow } from 'zustand/shallow';
import { generatePassword } from '../helpers/generatePassword';
import { useStore } from '../store/store';

interface Props {
  name: string;
}
export const Button = ({name}: Props) => {
  const values = useStore((state) => ({
    lengthPassword: state.lengthPassword,
    uppercase: state.uppercase,
    lowercase: state.lowercase,
    numbers: state.numbers,
    symbols: state.symbols,
    setPassword: state.setPassword,
  }), shallow);
  
  const handleClick = () => {
    const password = generatePassword({
      length: values.lengthPassword,
      uppercase: values.uppercase,
      lowercase: values.lowercase,
      numbers: values.numbers,
      symbols: values.symbols,
    });
    values.setPassword(password);
  };


  return (
    <button 
      className="bg-blue-700 text-white font-bold w-full p-4 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
      onClick={handleClick}
      disabled={values.lengthPassword === 0 || values.uppercase === false && values.lowercase === false && values.numbers === false && values.symbols === false }
    >
      {name}
    </button>
  );
};
