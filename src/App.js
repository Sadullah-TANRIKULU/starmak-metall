import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </main>
  );
}

export default App;
