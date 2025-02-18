import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your_test_publishable_key'); // Replace with your Stripe test key

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { cart, setCart } = useOutletContext();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cardElement = elements.getElement(CardElement);
        
        if (!stripe || !cardElement) return;

        // Fake processing
        alert("Payment successful! (Fake process)");

        // Clear cart after payment
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement className="p-4 border rounded" />
            <button type="submit" disabled={!stripe} className="pay-button">
                Pay Now
            </button>
        </form>
    );
};

const CheckoutPage = () => {
    const { cart, setCart } = useOutletContext();

    const removeFromCart = (courseId) => {
        const newCart = cart.filter(course => course.id !== courseId);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <div className="cart-items">
                {cart.length > 0 ? (
                    cart.map((course, index) => (
                        <div key={index} className="cart-item">
                            <div className="course-details">
                                <h3>{course.title}</h3>
                                <p>${course.price}</p>
                            </div>
                            <button onClick={() => removeFromCart(course.id)} className="remove-item">
                                <FaTrash />
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            <div className="checkout-summary">
                <h3>Total: ${cart.reduce((acc, course) => acc + course.price, 0).toFixed(2)}</h3>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default CheckoutPage;
