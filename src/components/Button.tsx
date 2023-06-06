interface Props {
  lengthPassword: number;
  uppercase: boolean; 
  lowercase: boolean; 
  numbers: boolean; 
  symbols: boolean; 
  setPasswordHandler: () => void;
}

export const Button = ({
  lengthPassword,
  uppercase,
  lowercase,
  numbers,
  symbols,
  setPasswordHandler
}: Props) => {
  return (
    <button 
      className="bg-blue-600 text-white font-bold w-full p-4 rounded-lg hover:bg-blue-500 disabled:bg-gray-200 dark:disabled:bg-slate-800 disabled:text-gray-500 dark:disabled:text-slate-600 dark:disabled:opacity-60 disabled:cursor-not-allowed"
      onClick={setPasswordHandler}
      disabled={lengthPassword === 0 || uppercase === false && lowercase === false && numbers === false && symbols === false }
    >
      Generar contraseña
    </button>
  );
};
