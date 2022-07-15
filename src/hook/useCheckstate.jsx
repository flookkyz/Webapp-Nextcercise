import { useState } from "react";

const useCheck = () => {

  function checkStateRan1() { localStorage.removeItem("state1"); localStorage.setItem("state1", JSON.stringify("success")); }
  function checkStateRan2() { localStorage.setItem("state2", JSON.stringify("success")); }
  function checkStateRan3() { localStorage.setItem("state3", JSON.stringify("success")); }
  function checkStateRan4() { localStorage.setItem("state4", JSON.stringify("success")); }
  function checkStateRan5() { localStorage.setItem("state5", JSON.stringify("success")); }

  function setstate1() {
    localStorage.setItem("state1", JSON.stringify("start"));
    localStorage.setItem("state2", JSON.stringify("unlock"));
    localStorage.setItem("state3", JSON.stringify("unlock"));
    localStorage.setItem("state4", JSON.stringify("unlock"));
    localStorage.setItem("state5", JSON.stringify("unlock"));
    localStorage.setItem("success", JSON.stringify("no"));
  }
  function checkState1() {
    localStorage.setItem("state1", JSON.stringify("success"));
    localStorage.setItem("state2", JSON.stringify("start"));
  }

  function checkState2() {
    localStorage.setItem("state2", JSON.stringify("success"));
    localStorage.setItem("state3", JSON.stringify("start"));
  }
  function checkState3() {
    localStorage.setItem("state3", JSON.stringify("success"));
    localStorage.setItem("state4", JSON.stringify("start"));
  }
  function checkState4() {
    localStorage.setItem("state4", JSON.stringify("success"));
    localStorage.setItem("state5", JSON.stringify("start"));
  }
  function checkState5() {
    localStorage.setItem("state5", JSON.stringify("success"));
    localStorage.setItem("success", JSON.stringify("yes"));
  }
  return {
    checkState1,
    setstate1,
    checkState2,
    checkState3,
    checkState4,
    checkState5,
    checkStateRan1,
    checkStateRan2,
    checkStateRan3,
    checkStateRan4,
    checkStateRan5,
  };
};

export default useCheck;
