interface Props {
  children: React.ReactNode
}
export const Container = ({children}: Props) => {
  return (
    <div className="flex h-screen justify-center items-center">  
      {children}
    </div>
  );
};
