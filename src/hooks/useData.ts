import { shallow } from 'zustand/shallow';
import { usePasswordStores } from '../store/passwordStore';
import { generatePassword } from '../helpers/generatePassword';
import { evaluatePassword } from '../helpers/evaluatePassword';

export const useData = () => {
  const {
    password,
    uppercase, 
    lowercase, 
    numbers, 
    symbols, 
    lengthPassword,
    setPassword,
    setLengthPassword,
    changeUppercase, 
    changeLowercase, 
    changeNumbers, 
    changeSymbols,
  } = usePasswordStores((state) => ({
    password: state.password,
    uppercase: state.uppercase,
    lowercase: state.lowercase,
    numbers: state.numbers,
    symbols: state.symbols,
    lengthPassword: state.lengthPassword,
    setPassword: state.setPassword,
    setLengthPassword: state.setLengthPassword,
    changeUppercase: state.changeUppercase,
    changeLowercase: state.changeLowercase,
    changeNumbers: state.changeNumbers,
    changeSymbols: state.changeSymbols,
  }), shallow);

  const setPasswordHandler = () => {
    const newPassword = generatePassword({
      length: lengthPassword,
      uppercase,
      lowercase,
      numbers,
      symbols,
    });
    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  const activeCount = evaluatePassword(password);





  return {
    activeCount,
    password,
    lengthPassword,
    uppercase,
    lowercase,
    numbers,
    symbols,
    setPasswordHandler,
    copyPassword,
    setLengthPassword,
    changeUppercase,
    changeLowercase,
    changeNumbers,
    changeSymbols,
  };
};