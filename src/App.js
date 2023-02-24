import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import NavbarHeader from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="headerNavigation">
        <NavbarHeader />
      </div>
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
