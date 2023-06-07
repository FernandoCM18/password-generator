import { useData } from '../hooks/useData';
import { Button, PasswordWithCopy, Options, ProgressBar, SecurityLevel} from './';
interface Props {
  title: string;
  showToaster: (show: boolean) => void
}

export const Card = ({title, showToaster}: Props) => {
  const {
    activeCount, 
    password,
    lengthPassword, 
    copyPassword, 
    uppercase, 
    lowercase, 
    numbers, 
    symbols,
    message,
    changeUppercase,
    changeLowercase,
    changeNumbers,
    changeSymbols,
    setPasswordHandler,
    setLengthPassword
  } = useData();
  
  const copyToClipboard = () => {
    copyPassword();
    showToaster(true);
    setTimeout(() => {
      showToaster(false);
    }, 2000);
  };

  
  return (
    <article className="bg-white dark:bg-slate-900 p-5 md:px-11 md:py-6 rounded-xl space-y-4 shadow-xl dark:shadow-none w-[327px] md:w-[650px] lg:w-[655px]">
      <h2 className="text-2xl font-bold dark:text-slate-100 md:text-center">{title}</h2>
      <PasswordWithCopy text={password} copyClipboard={copyToClipboard} />
      <form className="space-y-4">
        <ProgressBar 
          lengthPassword={lengthPassword}
          setLengthPassword={setLengthPassword}
        />
        <Options
          uppercase={uppercase}
          lowercase={lowercase}
          numbers={numbers}
          symbols={symbols}
          changeUppercase={changeUppercase}
          changeLowercase={changeLowercase}
          changeNumbers={changeNumbers}
          changeSymbols={changeSymbols} 
        />
        <SecurityLevel activeCount={activeCount} message={message} />
        <Button 
          lengthPassword={lengthPassword}
          uppercase={uppercase}
          lowercase={lowercase}
          numbers={numbers}
          symbols={symbols}
          setPasswordHandler={setPasswordHandler}
        />
      </form>
    </article>
  );
};
