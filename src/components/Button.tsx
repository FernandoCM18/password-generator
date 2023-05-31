interface Props {
  name: string;
  onClick?: () => void;
}
export const Button = ({name, onClick}: Props) => {
  return (
    <button 
      className="bg-blue-700 text-white font-bold w-full p-4"
      onClick={onClick}
    >
      {name}
    </button>
  );
};
