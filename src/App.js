import { useState } from "react";

const messages = [
  "Learn React😒",
  "Apply for jobs🤷‍♂️",
  "Invest your new income🤑",
];

function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < messages.length) {
      setStep(step + 1);
    }
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step === 1 ? "active" : ""} ? `}>1</div>
        <div className={`${step === 2 ? "active" : ""}  `}>2</div>
        <div className={`${step === 3 ? "active" : ""} `}>3</div>
      </div>
      <p className="message">
        Step : {step} : {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          onClick={handlePrevious}
          style={{
            backgroundColor: "#7950f2",
            color: "#fff",
          }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          style={{
            backgroundColor: "#7950f2",
            color: "#fff",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default App;
