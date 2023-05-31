import { Button } from './Button';
import { Label } from './Label';
import { Options } from './Options';
import { ProgressBar } from './ProgressBar';
import { SecurityLevel } from './SecurityLevel';

export const Card = () => {
  return (
    <article className="bg-white p-5 rounded-xl space-y-4 shadow-xl">
      <h2 className="text-2xl font-bold">Generador de contraseña</h2>
      <Label />
      <ProgressBar />
      <Options />
      <SecurityLevel activeCount={3} />
      <Button 
        name="Generar contraseña" 
      />
    </article>
  );
};
