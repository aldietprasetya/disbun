import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import Stepper from '../admin/infografis/Stepper';
import StepperControl from '../admin/infografis/StepperControl';
import { UseContextProvider } from 'src/contexts/StepperContexts';

import Step1 from "./manajemen-steps/step1";
import Step2 from "./manajemen-steps/step2";
import Step3 from "./manajemen-steps/step3";
import Step4 from "./manajemen-steps/step4";

const FormManajemen = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
      {/* Stepper */}
      <div className="horizontal container mt-5">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="pt-1 relative">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </>
  );
};
export default FormManajemen;
