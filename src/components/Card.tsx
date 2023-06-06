import { useData } from '../hooks/useData';
import { Button, Label, Options, ProgressBar, SecurityLevel} from './';
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
    changeUppercase,
    changeLowercase,
    changeNumbers,
    changeSymbols,
    setPasswordHandler,
    setLengthPassword
  } = useData();
  
  const PASSWORD_LENGTH = password.length;
  let message = '';

  if (PASSWORD_LENGTH === 0) message = '';
  if (activeCount === 0 && PASSWORD_LENGTH > 0) message = 'Muy débil';
  if (activeCount === 1 && PASSWORD_LENGTH > 0) message = 'Débil';
  if (activeCount === 2 && PASSWORD_LENGTH > 0) message = 'Buena';
  if (activeCount === 3 && PASSWORD_LENGTH > 0) message = 'Fuerte';
  if (activeCount === 4 && PASSWORD_LENGTH > 0) message = 'Muy fuerte';

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
      <Label text={password} copyClipboard={copyToClipboard} />
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
    </article>
  );
};
