import { useStore } from '../store/store';
import { Button } from './Button';
import { Label } from './Label';
import { Options } from './Options';
import { ProgressBar } from './ProgressBar';
import { SecurityLevel } from './SecurityLevel';
import { evaluatePassword } from '../helpers/evaluatePassword';

export const Card = () => {
  let message = '';
  const password = useStore((state) => state.password);
  const activeCount = evaluatePassword(password);
  if (activeCount === 0) message = 'Muy débil';
  if (activeCount === 1) message = 'Débil';
  if (activeCount === 2) message = 'Buena';
  if (activeCount === 3) message = 'Fuerte';
  if (activeCount === 4) message = 'Muy fuerte';
  
  return (
    <article className="bg-white p-5 rounded-xl space-y-4 shadow-xl">
      <h2 className="text-2xl font-bold">Generador de contraseña</h2>
      <Label />
      <ProgressBar />
      <Options />
      <SecurityLevel activeCount={activeCount} message={message} />
      <Button 
        name="Generar contraseña" 
      />
    </article>
  );
};
