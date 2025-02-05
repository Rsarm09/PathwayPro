import React from 'react'
import { Link } from "react-router-dom";



function Header() {
  return (
    <header>
        <nav className='flex justify-between items-center p-4 bg-gray-500 text-white'>
            <ul>
                <li className=''>
                    <Link to="/">Pathway Pro Icon</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header