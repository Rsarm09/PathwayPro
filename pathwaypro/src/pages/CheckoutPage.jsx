import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { cart, setCart } = useOutletContext();
    const navigate = useNavigate();
    
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const tax = subtotal * 0.12;
    const total = subtotal + tax;

    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardInfo, setCardInfo] = useState({ number: '', cvc: '', expiration: '' });
    const [billingAddress, setBillingAddress] = useState({ address: '', city: '', province: '', postalCode: '', country: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const validateCardDetails = () => {
        const cardNumberPattern = /^\d{16}$/;
        const cvcPattern = /^\d{3}$/;
        const expirationPattern = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    
        if (!cardNumberPattern.test(cardInfo.number) || !cvcPattern.test(cardInfo.cvc) || !expirationPattern.test(cardInfo.expiration)) {
            setErrorMessage("Invalid payment details. Please try again.");
            return false;
        }
        setErrorMessage('');
        return true;
    };

    const handlePayment = () => {
        if (!billingAddress.address || !billingAddress.city || !billingAddress.province || !billingAddress.postalCode || !billingAddress.country || !paymentMethod) {
            setErrorMessage("All fields are required.");
            return;
        }
        
        if (paymentMethod === 'Credit/Debit Card' && !validateCardDetails()) {
            return;
        }
        
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
            setCart([]);
            navigate('/home');
        }, 1000);
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl text-bluedark font-bold mb-4">Checkout</h1>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="mb-4">
                <label className="block font-bold">Billing Address</label>
                {Object.keys(billingAddress).map((field) => (
                    <input
                        key={field}
                        className="border p-2 w-full mt-2"
                        type="text"
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        required
                        maxLength={50}
                        value={billingAddress[field]}
                        onChange={(e) => setBillingAddress({ ...billingAddress, [field]: e.target.value })}
                    />
                ))}
            </div>
            <div className="mb-4">
                <label className="block font-bold">Payment Method</label>
                <div className="border p-2 w-full">
                    {['PayPal', 'Apple Pay', 'Google Pay', 'Credit/Debit Card'].map((method) => (
                        <div key={method} className="flex items-center">
                            <input 
                                type="radio" 
                                checked={paymentMethod === method} 
                                onChange={() => setPaymentMethod(method)}
                                className="mr-2"
                            />
                            <span>{method}</span>
                        </div>
                    ))}
                </div>
            </div>
            {paymentMethod === 'Credit/Debit Card' && (
                <div className="mb-4">
                    <label className="block font-bold">Card Number</label>
                    <input className="border p-2 w-full" type="text" placeholder="1234567890123456" maxLength={16} required value={cardInfo.number} onChange={(e) => setCardInfo({ ...cardInfo, number: e.target.value })} />
                    <label className="block font-bold">CVC</label>
                    <input className="border p-2 w-full" type="text" placeholder="123" maxLength={3} required value={cardInfo.cvc} onChange={(e) => setCardInfo({ ...cardInfo, cvc: e.target.value })} />
                    <label className="block font-bold">Expiration Date</label>
                    <input className="border p-2 w-full" type="text" placeholder="MM/YY" required value={cardInfo.expiration} onChange={(e) => setCardInfo({ ...cardInfo, expiration: e.target.value })} />
                </div>
            )}
            <div className="mt-4">
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Tax (12%): ${tax.toFixed(2)}</p>
                <p className="font-bold">Total: ${total.toFixed(2)}</p>
            </div>
            <button 
                className="bg-black text-white py-2 px-4 rounded mt-4 w-full"
                onClick={handlePayment}>
                Pay with {paymentMethod || '...'}
            </button>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg text-center relative">
                        <p className="text-xl font-bold">Thank you for your purchase!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;

