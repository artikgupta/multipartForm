import React from "react";

function Header({ currentStepCount }) {
  return (
    <div>
      <header className="flex">
        <h2 className={currentStepCount === 0 ? "active" : ""}>Step1</h2>
        <h2 className={currentStepCount === 1 ? "active" : ""}>Step2</h2>
        <h2 className={currentStepCount === 2 ? "active" : ""}>Step3</h2>
      </header>
    </div>
  );
}

export default Header;
