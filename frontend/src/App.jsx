// import React, { useState } from 'react';
// import Profile from './components/Step1Profile';
// import Step2PersonalInfo from './components/Step2PersonalInfo';
// import Step3PancardAadhar from './components/Step3PancardAadhara';
// import Step4BankDetails from './components/Step4BankDetails';
// import Step5PlanSelection from './components/Step5PlanSelection';

// const App = () => {
//     const [step, setStep] = useState(1);
//     const [values, setValues] = useState({
//         profilePhoto: null,
//         name: '',
//         address: '',
//         pancard: '',
//         aadhar: '',
//         bankDetails: '',
//         plan: null,
//     });

//     const nextStep = () => setStep(step + 1);
//     const previousStep = () => setStep(step - 1);
//     const handleChange = (input) => (e) => {
//         setValues({
//             ...values,
//             [input]: e.target.value,
//         });
//     };

//     const handleProfilePhotoChange = (file) => {
//         setValues({
//             ...values,
//             profilePhoto: file,
//         });
//     };

//     switch (step) {
//         case 1:
//             return <Profile nextStep={nextStep} handleChange={handleProfilePhotoChange} />;
//         case 2:
//             return <Step2PersonalInfo nextStep={nextStep} previousStep={previousStep} handleChange={handleChange} values={values} />;
//         case 3:
//             return <Step3PancardAadhar nextStep={nextStep} previousStep={previousStep} handleChange={handleChange} values={values} />;
//         case 4:
//             return <Step4BankDetails nextStep={nextStep} previousStep={previousStep} handleChange={handleChange} values={values} />;
//         case 5:
//             return <Step5PlanSelection nextStep={nextStep} previousStep={previousStep} handleChange={handleChange} values={values} />;
//         default:
//             return <div>Step not found!</div>;
//     }
// };

// export default App;


import React, { useState } from 'react';
import Step1Profile from './components/Step1Profile';
import Step2PersonalInfo from './components/Step2PersonalInfo';
import Step3PancardAadhar from './components/Step3PancardAadhara';
import Step4BankDetails from './components/Step4BankDetails';
import Step5PlanSelection from './components/Step5PlanSelection';

const App = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    profilePhoto: null,
    name: '',
    address: '',
    pancard: '',
    aadhar: '',
    bankDetails: '',
    plan: null,
  });

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setValues({
      ...values,
      [input]: e.target.value,
    });
  };

  const handleProfilePhotoChange = (file) => {
    setValues({
      ...values,
      profilePhoto: file,
    });
  };

  switch (step) {
    case 1:
      return <Step1Profile nextStep={nextStep} handleChange={handleProfilePhotoChange} />;
    case 2:
      return <Step2PersonalInfo nextStep={nextStep} previousStep={previousStep} handleChange={handleChange} values={values} />;
    case 3:
      return <Step3PancardAadhar nextStep={nextStep} previousStep={previousStep} handleChange={handleChange} values={values} />;
    case 4:
      return <Step4BankDetails nextStep={nextStep} previousStep={previousStep} handleChange={handleChange} values={values} />;
    case 5:
      return <Step5PlanSelection nextStep={nextStep} previousStep={previousStep} handleChange={handleChange} values={values} />;
    default:
      return <div>Step not found!</div>;
  }
};

export default App;
