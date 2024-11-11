import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 md:p-10 bg-green-100 rounded-lg shadow-md w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Payment Successful!</h2>
            <p className="text-lg text-gray-700 mb-6">Thank you for your payment. Your transaction was successful.</p>
            <button
                onClick={handleGoHome}
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
            >
                Go to Home
            </button>
        </div>
    );
};

export default SuccessPage;
