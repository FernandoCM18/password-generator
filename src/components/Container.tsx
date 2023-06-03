interface Props {
  children: React.ReactNode
}
export const Container = ({children}: Props) => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">  
      {children}
    </div>
  );
};
