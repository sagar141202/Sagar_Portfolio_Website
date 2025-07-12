import React from "react";
import BallCanvas from "./Ball";

const BallGrid = ({ logos }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {logos.map((logo, index) => (
        <div key={index} style={{ width: 100, height: 100 }}>
          <BallCanvas icon={logo} />
        </div>
      ))}
    </div>
  );
};

export default BallGrid;
