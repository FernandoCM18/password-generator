import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Card, Container, Toast, ToggleTheme} from './components/index';

function App() {
  const [showToast, setShowToast] = useState(false);
  const {theme, toggleTheme } = useTheme();
  
  return (
    <div className="bg-slate-50 dark:bg-slate-950">
      <Container>
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        {showToast && <Toast message="¡Contraseña copiada!" />}
        <Card showToaster={setShowToast} />         
      </Container>
    </div>
  );
}

export default App;
