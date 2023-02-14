import React from "react";
import { useParams } from "react-router-dom";

const Hellobluered = (props) => {
  const { parameter, bgColor, color } = useParams();

  return (
    <div
      style={{
        minHeight: "50px",
        color: color,
        backgroundColor: bgColor,
        fontSize: "40px",
      }}
    >
      <p> The word is:{parameter}</p>
    </div>
  );
};

export default Hellobluered;
