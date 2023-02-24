import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';

import NavbarHeader from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <div className="headerNavigation">
          <NavbarHeader />
        </div>
        <Routes>

        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
