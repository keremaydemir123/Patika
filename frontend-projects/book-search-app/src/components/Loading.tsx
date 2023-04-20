import React from "react";
import { BarLoader } from "react-spinners";

function Loading() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center prose z-10">
      <h2 style={{ color: "#eee" }}>Loading...</h2>
      <BarLoader color="#eee" />
    </div>
  );
}

export default Loading;
