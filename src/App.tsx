import { useState } from 'react';
import { Card } from './components/Card';
import { Container } from './components/Container';
import { Toast } from './components/Toast';

function App() {
  const [showToast, setShowToast] = useState(false);
  
  return (
    <div className="bg-slate-50 dark:bg-slate-950">
      <Container>
        {showToast && <Toast message="¡Contraseña copiada!" />}
        <Card showToaster={setShowToast} />         
      </Container>
    </div>
  );
}

export default App;
