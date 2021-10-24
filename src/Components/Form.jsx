import React, { useState } from "react";

import Header from "./Header";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

const initialState = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  email: "",
  address: "",
  message: "",
  errors: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    address: "",
    message: "",
  },
};

function Form() {
  const [currentStepCount, SetCurrentStepCount] = useState(0);
  const [user, SetUser] = useState(initialState);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const { errors } = { ...initialState };
    console.log(errors);
    SetUser({ ...user, [name]: value });
  };

  const handlePrev = () => {
    if (currentStepCount > 0) {
      SetCurrentStepCount(currentStepCount - 1);
    }
  };

  const handleNext = () => {
    if (currentStepCount < 2) {
      SetCurrentStepCount(currentStepCount + 1);
    }
  };

  const forms = {
    step1: <Form1 user={user} handleChange={handleChange} />,
    step2: <Form2 user={user} handleChange={handleChange} />,
    step3: <Form3 user={user} handleChange={handleChange} />,
  };

  const renderForms = () => {
    let currentStep = 0;

    switch (currentStepCount) {
      case 0:
        currentStep = "step1";
        break;
      case 1:
        currentStep = "step2";
        break;
      case 2:
        currentStep = "step3";
        break;
      default:
        currentStep = "step1";
    }

    return forms[currentStep];
  };

  return (
    <div className="container">
      <div className="flex-col">
        <div className="wrapper flex">
          <div className="img">
            <img src="/assets/checklist.webp" alt="" />
          </div>
          <div className="form">
            <Header currentStepCount={currentStepCount} />
            {renderForms()}
            {currentStepCount > 0 ? (
              <button onClick={handlePrev}>Prev</button>
            ) : null}
            {currentStepCount < 2 ? (
              <button onClick={handleNext}>Next</button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
