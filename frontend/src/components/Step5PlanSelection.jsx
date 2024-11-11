import React, { useState } from 'react';

const Step5PlanSelection = ({ nextStep, previousStep, handleChange, values }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    if (!selectedPlan) {
      alert("Please select a plan before proceeding to payment.");
      return;
    }

    const options = {
      key: 'rzp_test_p9s4PGGp2P5wpd',  // Replace with your Razorpay API key
      amount: selectedPlan.amount * 100,  // Amount in paise
      currency: "INR",
      name: "Your Company",
      description: "Plan Purchase",
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        alert("Payment successful: " + response.razorpay_payment_id);
        
        // After payment, send all user data (including selected plan) to the backend
        handleSubmitForm(response.razorpay_payment_id);
      },
      prefill: {
        name: values.name,
        email: values.email,
        contact: values.contactNumber,
        number:values.cardNumber,
        CVV:values.cvv
      },
      notes: {
        address: values.address,
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  // Function to send form data to backend
  const handleSubmitForm = (paymentId) => {
    const data = {
      name: values.name,
      email: values.email,
      contact: values.contactNumber,
      address: values.address,
      pancard: values.pancard,
      aadhar: values.aadhar,
      bankDetails: values.bankDetails,
      selectedPlan,
      paymentId,
    };

    fetch('http://localhost:5000/api/submit-form', {  // Backend endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted successfully:', data);
      nextStep();
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-10 bg-gray-100 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">Step 5: Select a Plan</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Basic Plan */}
        <div 
          className={`p-6 border rounded-lg cursor-pointer text-center ${selectedPlan?.name === 'Basic' ? 'border-blue-500' : 'border-gray-300'} hover:shadow-lg`}
          onClick={() => handlePlanSelection({ name: 'Basic', amount: 500 })}
        >
          <h3 className="text-xl font-semibold">Basic Plan</h3>
          <p className="text-gray-700">₹500</p>
        </div>

        {/* Standard Plan */}
        <div 
          className={`p-6 border rounded-lg cursor-pointer text-center ${selectedPlan?.name === 'Standard' ? 'border-blue-500' : 'border-gray-300'} hover:shadow-lg`}
          onClick={() => handlePlanSelection({ name: 'Standard', amount: 1000 })}
        >
          <h3 className="text-xl font-semibold">Standard Plan</h3>
          <p className="text-gray-700">₹1000</p>
        </div>

        {/* Premium Plan */}
        <div 
          className={`p-6 border rounded-lg cursor-pointer text-center ${selectedPlan?.name === 'Premium' ? 'border-blue-500' : 'border-gray-300'} hover:shadow-lg`}
          onClick={() => handlePlanSelection({ name: 'Premium', amount: 2000 })}
        >
          <h3 className="text-xl font-semibold">Premium Plan</h3>
          <p className="text-gray-700">₹2000</p>
        </div>
      </div>

      <div className="flex justify-between w-full mt-4">
        <button 
          onClick={previousStep}
          className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-200"
        >
          Back
        </button>

        <button 
          onClick={handlePayment}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Step5PlanSelection;
