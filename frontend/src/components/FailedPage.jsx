import React from 'react';
import { useNavigate } from 'react-router-dom';

const FailedPage = () => {
    const navigate = useNavigate();

    const handleTryAgain = () => {
        navigate('/step5'); // Assuming Step 5 is where the user selects the plan and pays
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 md:p-10 bg-red-100 rounded-lg shadow-md w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Payment Failed!</h2>
            <p className="text-lg text-gray-700 mb-6">We encountered an issue with your payment. Please try again.</p>
            <button
                onClick={handleTryAgain}
                className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-200"
            >
                Try Again
            </button>
        </div>
    );
};

export default FailedPage;
