import { useState } from 'react';
import { Card, Container, Toast, ToggleTheme} from './components/index';

function App() {
  const [showToast, setShowToast] = useState(false);
  
  return (
    <div className="bg-slate-50 dark:bg-slate-950">
      <Container>
        <ToggleTheme />
        {showToast && <Toast message="¡Contraseña copiada!" />}
        <Card 
          title="Generador de contraseña"
          showToaster={setShowToast} 
        />         
      </Container>
    </div>
  );
}

export default App;
