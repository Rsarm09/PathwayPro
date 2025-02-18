import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

//components
import Layout from './components/Layout';

//pages
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Signedinhomepage from './pages/Signedinhomepage';
import Coursepage from './pages/Coursepage';
import CheckoutPage from './pages/CheckoutPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/home' element={<Signedinhomepage />} />
          <Route path='/course' element={<Coursepage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
         

        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
