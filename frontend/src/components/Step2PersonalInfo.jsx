import React from 'react';

const Step2PersonalInfo = ({ nextStep, previousStep, handleChange, values }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            {/* Card Container */}
            <div className="flex max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg space-x-8">
                {/* Form Section (Left) */}
                <div className="w-full bg-gray-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-center mb-6">Step 2: Personal Information</h2>

                    {/* Name Input */}
                    <div className="w-full mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange('name')}
                            className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Address Input */}
                    <div className="w-full mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="address">Address</label>
                        <input
                            id="address"
                            type="text"
                            value={values.address}
                            onChange={handleChange('address')}
                            className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between w-full mt-4">
                        <button
                            onClick={previousStep}
                            className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
                        >
                            Back
                        </button>

                        <button
                            onClick={nextStep}
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Preview Section (Right) */}
                <div className="w-1/2 bg-gray-50 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-lg font-medium mb-4">Personal Info Preview</h3>
                    <div className="text-left">
                        <p><strong>Name:</strong> {values.name || "Not provided"}</p>
                        <p><strong>Address:</strong> {values.address || "Not provided"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2PersonalInfo;
