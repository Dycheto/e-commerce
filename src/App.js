import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';

import './App.css';
import NavbarHeader from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';


function App() {


  return (
    <AuthProvider >
      <div className="App">
        <NavbarHeader />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
