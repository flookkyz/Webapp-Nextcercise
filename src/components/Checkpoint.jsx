import React, { useEffect, useState } from "react";
import "../css/Checkpoint.css";
import Pic_Map from "../pic/map.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { BiLock } from "react-icons/bi";
import useCheck from "../hook/useCheckstate";
import { BsCheckLg } from "react-icons/bs";
import { usePosition } from "../hook/usePosition";
import Swal from "sweetalert2";
import Success from "./Success";

const url = process.env.REACT_APP_GET_URL;

function Checkpoint() {
  // const [kuyApi, setKuyApi] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isCheckpotin, setIsCheckpotin] = useState(false);
  const [isSuccessAll, setIsSuccessAll] = useState(false);
  const [state1, setState1] = useState(null);
  const [state2, setState2] = useState(null);
  const [state3, setState3] = useState(null);
  const [state4, setState4] = useState(null);
  const [state5, setState5] = useState(null);

  let { setstate1 } = useCheck();

  function GetLocal() {
    const checkpointst1 = JSON.parse(localStorage.getItem("state1"));
    const checkpointSt2 = JSON.parse(localStorage.getItem("state2"));
    const checkpointSt3 = JSON.parse(localStorage.getItem("state3"));
    const checkpointSt4 = JSON.parse(localStorage.getItem("state4"));
    const checkpointSt5 = JSON.parse(localStorage.getItem("state5"));

    setState1(checkpointst1);
    setState2(checkpointSt2);
    setState3(checkpointSt3);
    setState4(checkpointSt4);
    setState5(checkpointSt5);
  }

  const checkSuccessAll = () => {
    const checkpointSt1 = JSON.parse(localStorage.getItem("state1"));
    const checkpointSt2 = JSON.parse(localStorage.getItem("state2"));
    const checkpointSt3 = JSON.parse(localStorage.getItem("state3"));
    const checkpointSt4 = JSON.parse(localStorage.getItem("state4"));
    const checkpointSt5 = JSON.parse(localStorage.getItem("state5"));
    if (checkpointSt1 == "success" && checkpointSt2 == "success" && checkpointSt3 == "success" && checkpointSt4 == "success" && checkpointSt5 == "success") {
      setIsSuccessAll(true)
    }
  }

  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      await axios.get(`${url}/checkpoint`).then((res) => {
        if (res.data.length > 0) {
          if (!localStorage.getItem("cpId")) {
            localStorage.setItem("cpId", res.data[0].cpId)
          } else {
            if (res.data[0].cpId != localStorage.getItem("cpId")) {
              localStorage.clear()
            }
          }
          setTimeout(() => {
            setIsLoading(true)
          }, 500);
          setIsCheckpotin(true)
          setData(res.data[0]);
          if(res.data[0].isRandom === 'y') {
            if(JSON.parse(localStorage.getItem("state1")) === "success") {
              localStorage.setItem("state1", JSON.stringify("success"));
            } else {
              localStorage.setItem("state1", JSON.stringify("start"));
            }
            if(JSON.parse(localStorage.getItem("state2")) === "success") {
              localStorage.setItem("state2", JSON.stringify("success"));
            } else {
              localStorage.setItem("state2", JSON.stringify("start"));
            }
            if(JSON.parse(localStorage.getItem("state3")) === "success") {
              localStorage.setItem("state3", JSON.stringify("success"));
            } else {
              localStorage.setItem("state3", JSON.stringify("start"));
            }
            if(JSON.parse(localStorage.getItem("state4")) === "success") {
              localStorage.setItem("state4", JSON.stringify("success"));
            } else {
              localStorage.setItem("state4", JSON.stringify("start"));
            }
            if(JSON.parse(localStorage.getItem("state5")) === "success") {
              localStorage.setItem("state5", JSON.stringify("success"));
            } else {
              localStorage.setItem("state5", JSON.stringify("start"));
            }
            localStorage.setItem("isRandom", "y");
          }
          console.log("data : ", res.data[0]);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    await getData();
    checkSuccessAll();
    GetLocal();
  }, []);

  const FindCheckpoint = () => (
    <div>
      <div className="bg-map">
        <img src={Pic_Map} alt="map" className="map" />
      </div>
      {(state1 === null || state1 === undefined || state1 === 'start') ? (
        <>
          <Link to="/checkpoint/1">
            <div className="checkpoint1">
              <span className="checkpoint-num">1</span>
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="checkpoint1-success">
            <span className="checkpoint-num">
              <BsCheckLg className="fill" />
            </span>
          </div>
        </>
      )}

      <div className="checkpoint-name-1">
        <span className="checkpoint-location">{data.locationName1}</span>
      </div>
      {(state2 === "unlock" || state2 === null || state2 === undefined) ? (
        <>
          <div className="checkpointlock2">
            <span className="checkpoint-num">
              <BiLock />
            </span>
          </div>
        </>
      ) : (state2 === "start") ? (
        <>
          <Link to="/checkpoint/2">
            <div className="checkpoint2">
              <span className="checkpoint-num">2</span>
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="checkpoint2-success">
            <span className="checkpoint-num">
              <BsCheckLg className="fill" />
            </span>
          </div>
        </>
      )}
      <div className="checkpoint-name-2">
        <span className="checkpoint-location">{data.locationName2}</span>
      </div>
      {(state3 === "unlock" || state3 === null || state3 === undefined) ? (
        <>
          <div className="checkpointlock3">
            <span className="checkpoint-num">
              <BiLock />
            </span>
          </div>
        </>
      ) : state3 === "start" ? (
        <>
          <Link to="/checkpoint/3">
            <div className="checkpoint3">
              <span className="checkpoint-num">3</span>
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="checkpoint3-success">
            <span className="checkpoint-num">
              <BsCheckLg className="fill" />
            </span>
          </div>
        </>
      )}

      <div className="checkpoint-name-3">
        <span className="checkpoint-location">{data.locationName3}</span>
      </div>
      {(state4 === "unlock" || state4 === null || state4 === undefined) ? (
        <>
          <div className="checkpointlock4">
            <span className="checkpoint-num">
              <BiLock />
            </span>
          </div>
        </>
      ) : state4 === "start" ? (
        <>
          <Link to="/checkpoint/4">
            <div className="checkpoint4">
              <span className="checkpoint-num">4</span>
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="checkpoint4-success">
            <span className="checkpoint-num">
              <BsCheckLg className="fill" />
            </span>
          </div>
        </>
      )}

      <div className="checkpoint-name-4">
        <span className="checkpoint-location">{data.locationName4}</span>
      </div>

      {(state5 === "unlock" || state5 === null || state5 === undefined) ? (
        <>
          <div className="checkpointlock5">
            <span className="checkpoint-num">
              <BiLock />
            </span>
          </div>
        </>
      ) : state5 === "start" ? (
        <>
          <Link to="/checkpoint/5">
            <div className="checkpoint5">
              <span className="checkpoint-num">5</span>
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="checkpoint5-success">
            <span className="checkpoint-num">
              <BsCheckLg className="fill" />
            </span>
          </div>
        </>
      )}
      <div className="checkpoint-name-5">
        <span className="checkpoint-location">{data.locationName5}</span>
      </div>
    </div>
  )

  const NotFoundCheckpoint = () => {
    // setTimeout(() => {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Not found!',
    //     text: 'Not found Checkpoint!'
    //   })
    // }, 1500);
    return (<div>Not Found Checkpoint</div>)
  }

  return (
    <>
      {isLoading ? (isCheckpotin ? (isSuccessAll ? <Success /> : <FindCheckpoint />) : (<NotFoundCheckpoint />)) : <div className="mx-auto">Loading...</div>}
    </>
  );
}

export default Checkpoint;
