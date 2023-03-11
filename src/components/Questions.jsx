import React, { useState } from "react";

const Questions = () => {
  const [step, setStep] = useState("step1");
  const [answers, setAnswers] = useState({});

  const takeAnswersAndChangeState = () => {
    if (step === "step1") {
      setAnswers({ ...answers, questionOne: "running" });
      setStep("step2");
      console.log("answers", answers);
    } else if (step === "step2") {
      setAnswers({ ...answers, questionTwo: "jumping" });
      setStep("step3");
      console.log("answers", answers);
    } else if (step === "step3") {
      setAnswers({ ...answers, questionThree: "flying" });
      setStep("step2");
      console.log("answers", answers);
    }
  };

  if (step === "step1") {
    return (
      <div>
        <h3>What are you looking to do?</h3>
        <button onClick={takeAnswersAndChangeState}>place to eat</button>
        <button onClick={takeAnswersAndChangeState}>
          visit tourist locations
        </button>
        <button onClick={takeAnswersAndChangeState}>find a local park</button>
      </div>
    );
  } else if (step === "step2") {
    return (
      <div>
        <h3>How far from your current location?</h3>
        <button onClick={takeAnswersAndChangeState}>0km - 2km</button>
        <button onClick={takeAnswersAndChangeState}>2km - 5km</button>
        <button onClick={takeAnswersAndChangeState}>more than 5km</button>
      </div>
    );
  } else if (step === "step3") {
    return <button onClick={takeAnswersAndChangeState}>Step 3</button>;
  }

  return <div></div>;
};

export default Questions;

// we will set the state of which component should show on screen based on the current step state
// once the onclick is clicked then we should setstate to the next step and so on

/* questions to ask:
1- what are you in the mood for? 1- place to eat 2- visit tourist locations 3- local park
2- how far from current location? 1- 0km - 2km 2- 2km - 5km 3- more than 5km
aa */
