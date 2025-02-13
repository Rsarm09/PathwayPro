import React from 'react';
import { Link } from 'react-router-dom';

function Loginpage() {
    return (
        <div className="flex h-screen flex-col justify-center items-center px-6 sm:px-8 bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                {/* Logo */}
                <h3 className="text-center text-xl font-bold">Logo</h3>

                {/* Heading */}
                <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
                    Sign in to your account
                </h2>

                {/* Form */}
                <form className="mt-6 space-y-4" action="#" method="POST">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                                Password
                            </label>
                            <a href="#" className="text-sm font-semibold text-blueprimary hover:text-bluedark">
                                Forgot password?
                            </a>
                        </div>
                        <div className="mt-1">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <div>
                        <Link
                            to="/home"
                            className="flex w-full justify-center rounded-md bg-blueprimary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bluedark transition focus:ring-blueprimary"
                        >
                            Sign in
                        </Link>
                    </div>
                </form>

                {/* Sign-up Link */}
                <p className="mt-6 text-center text-sm text-black">
                    Not a member?{' '}
                    <a href="#" className="font-semibold text-blueprimary hover:text-bluedark">
                        Start a 14-day free trial
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Loginpage;
