import { shallow } from 'zustand/shallow';
import { usePasswordStores } from '../store/passwordStore';

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


  return {
    password,
    lengthPassword,
    uppercase,
    lowercase,
    numbers,
    symbols,
    setPassword,
    setLengthPassword,
    changeUppercase,
    changeLowercase,
    changeNumbers,
    changeSymbols,
  };
};