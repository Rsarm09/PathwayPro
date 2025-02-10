import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

//components
import Layout from './components/Layout';

//pages
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/login' element={<Loginpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    

  )
}

export default App
