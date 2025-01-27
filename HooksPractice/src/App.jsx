import React from "react";
import UseEffectPractice from "./components/UseEffectPractice";
import Spinner from "./components/Spinner";
import DivSwap from "./components/DivSwap";
import "./app.css";
// import Profile from "./components/Profile";
// import Products from "./components/Products";

const App = () => {
  return (
    <>
      {/* <Spinner></Spinner> */}
      <div className="px-28 py-16">
        {/* <UseEffectPractice />; */}
        {/* <Profile></Profile> */}
        {/* <Products></Products> */}
        <DivSwap></DivSwap>
      </div>
    </>
  );
};

export default App;
