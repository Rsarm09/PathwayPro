import React from 'react'

function Footer() {
    return (
        <div className="relative mx-auto flex p-8 bg-bluedark text-white">
            <div>
                <p> &copy; 2025 PathwayPro All Rights Reserved</p>
            </div>
            <div className="flex flex-grow justify-end">
                <ul className="flex">
                    <li className="pr-5"><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer