import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import PublicLayout from './Layout/PublicLayout';
import { PUBLIC_ROUTER } from './router/index.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/login'
          element={<Login />}
        />
        {PUBLIC_ROUTER.map((e) => 
          <Route
            key={e.key}
            path={e.path}
            exact={e.exact}
            element={<PublicLayout>{e.element}</PublicLayout>}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
