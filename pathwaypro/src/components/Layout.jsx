import React, {useState} from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Layout() {

    const [cart, setCart] = useState([]);
  
  return (
    <div>
        <Header cart={cart} />
            <main>
                <Outlet context={{ cart, setCart }} />
            </main>
        <Footer />
    </div>
  )
}

export default Layout