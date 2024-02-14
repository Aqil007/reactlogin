
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Header from './components/Header';

function App() {
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </div>
  );
}

export default App;
