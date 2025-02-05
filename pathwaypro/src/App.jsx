import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';

//components
import Layout from './components/Layout';
import Homepage from './pages/Homepage';

//pages

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    

  )
}

export default App
