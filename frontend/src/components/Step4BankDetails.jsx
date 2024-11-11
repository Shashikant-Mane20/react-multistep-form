import React from 'react';

const Step4BankDetails = ({ nextStep, previousStep, handleChange, values }) => {
  return (
    <div className="flex justify-between items-start min-h-screen bg-gray-100 p-6">
      {/* Form Container */}
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-6">Step 4: Bank Details</h2>

        {/* Bank Account Number input */}
        <div className="w-full mb-6">
          <label htmlFor="bankDetails" className="block text-sm font-medium mb-2">Bank Account Number</label>
          <input
            id="bankDetails"
            type="text"
            placeholder="Enter your bank account number"
            value={values.bankDetails}
            onChange={handleChange('bankDetails')}
            className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Card Number input */}
        <div className="w-full mb-6">
          <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">Card Number</label>
          <input
            id="cardNumber"
            type="text"
            placeholder="Enter your card number"
            value={values.cardNumber}
            onChange={handleChange('cardNumber')}
            className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Validity Month and Year inputs */}
        <div className="w-full mb-6 flex space-x-4">
          <div className="flex-1">
            <label htmlFor="validityMonth" className="block text-sm font-medium mb-2">Validity Month</label>
            <input
              id="validityMonth"
              type="text"
              placeholder="MM"
              value={values.validityMonth}
              onChange={handleChange('validityMonth')}
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="validityYear" className="block text-sm font-medium mb-2">Validity Year</label>
            <input
              id="validityYear"
              type="text"
              placeholder="YY"
              value={values.validityYear}
              onChange={handleChange('validityYear')}
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* CVV input */}
        <div className="w-full mb-6">
          <label htmlFor="cvv" className="block text-sm font-medium mb-2">CVV</label>
          <input
            id="cvv"
            type="text"
            placeholder="Enter CVV"
            value={values.cvv}
            onChange={handleChange('cvv')}
            className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
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

      {/* Preview Section */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg ml-6">
        <h3 className="text-lg font-semibold text-center mb-6">Preview</h3>

        <div className="mb-4">
          <strong>Bank Account Number: </strong>
          <span>{values.bankDetails}</span>
        </div>
        <div className="mb-4">
          <strong>Card Number: </strong>
          <span>{values.cardNumber}</span>
        </div>
        <div className="mb-4">
          <strong>Validity: </strong>
          <span>{values.validityMonth}/{values.validityYear}</span>
        </div>
        <div className="mb-4">
          <strong>CVV: </strong>
          <span>{values.cvv}</span>
        </div>
      </div>
    </div>
  );
};

export default Step4BankDetails;

