import { useStore } from '../store/store';
import { Button } from './Button';
import { Label } from './Label';
import { Options } from './Options';
import { ProgressBar } from './ProgressBar';
import { SecurityLevel } from './SecurityLevel';
import { evaluatePassword } from '../helpers/evaluatePassword';

interface Props {
  showToaster: (show: boolean) => void
}

export const Card = ({showToaster}: Props) => {
  let message = '';
  const password = useStore((state) => state.password);
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
    <article className="bg-white p-5 rounded-xl space-y-4 shadow-xl max-w-[327px]">
      <h2 className="text-2xl font-bold">Generador de contraseña</h2>
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
