interface Props {
  children: React.ReactNode
}
export const Container = ({children}: Props) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center pb-12">  
      {children}
    </div>
  );
};
