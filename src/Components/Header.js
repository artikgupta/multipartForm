import React from "react";

function Header({ currentStepCount }) {
  return (
    <div>
      <header className="flex">
        <h2>
          <span className={currentStepCount === 0 ? "active" : ""}>1</span>
          Signup
        </h2>
        <h2>
          <span className={currentStepCount === 1 ? "active" : ""}>2</span>
          Message
        </h2>
        <h2>
          <span className={currentStepCount === 2 ? "active" : ""}>3</span>
          Checkbox
        </h2>
      </header>
    </div>
  );
}

export default Header;
