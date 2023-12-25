import React from "react";

const PrimeButton = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick ? handleClick : null} className="primeButton">
      {text}
    </button>
  );
};

export default PrimeButton;
