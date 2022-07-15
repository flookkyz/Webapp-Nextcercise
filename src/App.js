import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import AR_Scan from "./components/AR_Scan";
import Checkpoint_detail from "./components/Checkpoint_detail";
import Checkpoint from "./components/Checkpoint";
import AR from "./components/AR";
import AR2 from "./components/AR2";
import AR3 from "./components/AR3";
import AR4 from "./components/AR4";
import AR5 from "./components/AR5";
import AR_Success from "./components/AR_Success";
import Success from "./components/Success";

function App() {

  // const getIsRandom = localStorage.getItem("isRandom");

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Checkpoint />} />
          <Route
            path="/checkpoint/:idcheckpoint"
            element={<Checkpoint_detail />}
          />
          {/* <Route path="/checkpoint/scan_ar/:idar" element={<AR_Scan />} /> */}
          <Route path="/checkpoint/ar1/:idar" element={<AR />} />
          <Route path="/checkpoint/ar2/:idar" element={<AR2 />} />
          <Route path="/checkpoint/ar3/:idar" element={<AR3 />} />
          <Route path="/checkpoint/ar4/:idar" element={<AR4 />} />
          <Route path="/checkpoint/ar5/:idar" element={<AR5 />} />
          <Route path="/success" element={<Success />} />
          <Route path="/ar_success/:idar" element={<AR_Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;