import React, { useState } from "react";
import "./inputs.scss";
import TextField from "../../components/text-field";
import GlowButton from "../../components/glow-button";

const Inputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="inputs__container">
      <div className="form-control">
        <TextField
          title="Name"
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <TextField
          title="Email"
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <GlowButton text="Submit" />
      </div>
    </div>
  );
};

export default Inputs;
