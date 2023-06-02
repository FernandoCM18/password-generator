import { useData } from '../hooks/useData';
import { Button, Label, Options, ProgressBar, SecurityLevel} from './';
import { evaluatePassword } from '../helpers/evaluatePassword';

interface Props {
  showToaster: (show: boolean) => void
}

export const Card = ({showToaster}: Props) => {
  let message = '';
  const {password} = useData();
  const activeCount = evaluatePassword(password);

  if (password.length === 0) message = '';
  if (activeCount === 0 && password.length > 0) message = 'Muy débil';
  if (activeCount === 1 && password.length > 0) message = 'Débil';
  if (activeCount === 2 && password.length > 0) message = 'Buena';
  if (activeCount === 3 && password.length > 0) message = 'Fuerte';
  if (activeCount === 4 && password.length > 0) message = 'Muy fuerte';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    showToaster(true);
    setTimeout(() => {
      showToaster(false);
    }, 2000);
  };

  
  return (
    <article className="bg-white dark:bg-slate-900 p-5 rounded-xl space-y-4 shadow-xl dark:shadow-none max-w-[327px]">
      <h2 className="text-2xl font-bold dark:text-slate-100">Generador de contraseña</h2>
      <Label text={password} copyClipboard={copyToClipboard} />
      <ProgressBar />
      <Options />
      <SecurityLevel activeCount={activeCount} message={message} />
      <Button 
        name="Generar contraseña" 
      />
    </article>
  );
};
