import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {
  const fecha = new Date();
  const yearActual = fecha.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mejorando mi React
        </p>
        
        
        <PrimerComponente />
        <hr/>
        <SegundoComponente />
        <EjercicioComponent year = {yearActual} />
      </header>
      

    </div>
  );
}

export default App;
