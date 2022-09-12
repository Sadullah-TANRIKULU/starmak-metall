import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <main className="App font-montserrat w-[120rem] bg-white">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </main>
  );
}

export default App;
