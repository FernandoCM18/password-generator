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

  let message = '';
  const PASSWORD_LENGTH = password.length;

  if (PASSWORD_LENGTH === 0) message = '';
  if (activeCount === 0 && PASSWORD_LENGTH > 0) message = 'Muy débil';
  if (activeCount === 1 && PASSWORD_LENGTH > 0) message = 'Débil';
  if (activeCount === 2 && PASSWORD_LENGTH > 0) message = 'Buena';
  if (activeCount === 3 && PASSWORD_LENGTH > 0) message = 'Fuerte';
  if (activeCount === 4 && PASSWORD_LENGTH > 0) message = 'Muy fuerte';





  return {
    activeCount,
    password,
    lengthPassword,
    uppercase,
    lowercase,
    numbers,
    symbols,
    message,
    setPasswordHandler,
    copyPassword,
    setLengthPassword,
    changeUppercase,
    changeLowercase,
    changeNumbers,
    changeSymbols,
  };
};