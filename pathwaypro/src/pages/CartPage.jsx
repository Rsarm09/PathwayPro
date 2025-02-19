import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cart, setCart } = useOutletContext();
    const navigate = useNavigate();

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className=" w-full px-5 sm:px-5 md:px-10 lg:px-20 py-10 mb-96 ">
        <h1 className="text-4xl font-bold mb-10 ">Shopping Cart</h1>
        {cart.length === 0 ? (
            <p className='text-red-400'>Your cart is empty.</p>
        ) : (
            <div className='border-bluedark border-2 rounded p-5'>
                <ul className="list-decimal">
                    {cart.map((item, index) => (
                        <li key={item.id} className="border-b py-2 flex justify-between">
                            <span className='font-bold '>{index + 1}. {item.title} - ${item.price.toFixed(2)}</span>
                            <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 ">
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="mt-20">
                    <p className="font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
                    <button 
                        className="secBtn text-white py-2 px-4 rounded mt-4" 
                        onClick={() => navigate('/checkout')}>
                        Proceed to Checkout
                    </button>
                </div>
                
            </div>
        )}
    </div>

    );
};

export default CartPage;