import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <div
        className="loading-spinner"
        style={{
          height: 100,
          width: 100,
          border: `10px solid #220f0033`,
          borderTop: `10px solid #383636`,
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

export default Loader;
