import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        {/* <Route 
          path='/'
          exact={true}
          element={<Blog />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
