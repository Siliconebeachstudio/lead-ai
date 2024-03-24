import React from "react";
import RingLoader from "react-spinners/RingLoader";

function LoadingScreen() {
  return (
    <div className="z-50 flex h-screen w-screen items-center justify-center bg-white">
      <div className="relative flex flex-col items-center justify-center">
        <div className="z-10 text-5xl font-bold text-orange-500 mb-5">
        Lead Valley AI
        </div>
        <RingLoader color="rgba(168, 85, 247, 1)" speedMultiplier={1.5} />
      </div>
    </div>
  );
}

export default LoadingScreen;