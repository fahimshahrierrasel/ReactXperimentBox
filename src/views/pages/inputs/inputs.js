import React from "react";
import "./inputs.scss";

const Inputs = () => {
  return (
    <div className="inputs__container">
      <div className="form-field">
        <input type="email" id="name" name="name" placeholder=" " />
        <label htmlFor="name" className="form-field__label">
          Name
        </label>
      </div>
    </div>
  );
};

export default Inputs;
