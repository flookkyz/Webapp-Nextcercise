import React, { useEffect, useState } from "react";
import AR_Scan from "./AR_Scan";
import { Link } from "react-router-dom";
import "../css/AR.css";
import useCheck from "../hook/useCheckstate";
import { useParams } from "react-router-dom";
import axios from "axios";
import usePosition from "../hook/usePosition";
import { getDistance } from "geolib";

function AR5() {
  let { idar } = useParams();
  let { checkState5, checkStateRan5 } = useCheck();
  const [mindFile, setMindFile] = useState("");
  const [gltfFile, setGltfFile] = useState("");
  const [latitude1, setLatutude1] = useState("");
  const [longitude1, setLongitude1] = useState("");
  const [ischeckArea, setIsCheckArea] = useState(false);
  const [length, setLength] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { latitude, longtitude, error } = usePosition();
  const url = process.env.REACT_APP_GET_URL;

  // ============================= หาระยะทางระหว่างคนกับจุด latitude และ longtitude ===============================//
  const calDistance = () => {
    var distance = getDistance(
      {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longtitude),
      },
      {
        latitude: parseFloat(latitude1),
        longitude: parseFloat(longitude1),
      }
    );

    var distances = parseFloat(distance) / 1000;
    console.log("ระยะห่าง (KM)", distances);
    if (distances <= length) {
      if (ischeckArea === false) {
        setIsCheckArea(true);
        console.log("อยู่ในพื้นที่โว้ย");
      }
    } else {
      console.log("อยู่นอกพื้นที่เว้ย");
    }
  };

  //=====================================================================================================================//

  const getData = async () => {
    try {
      await axios.get(`${url}/checkpoint`).then((res) => {
        setLatutude1(res.data[0].latitude5);
        setLongitude1(res.data[0].longitude5);
        setLength(res.data[0].length5);
        const data = res.data[0];
        console.log(data);
        const urls = `${url}/checkpoint/s`;

        setMindFile(`${urls}/${data.cpId}/${data.startFile5}`);
        setGltfFile(`${urls}/${data.cpId}/${data.resultFile5}`);

        console.log(
          "setGltfFile : ",
          `${urls}/${data.cpId}/${data.startFile5}`
        );
        console.log("length", res.data[0].length5);
      });
    } catch (error) {
      console.log(error);
    }
  };

  calDistance();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {mindFile != "" ? (
        gltfFile ? (
          <div className="ar">
            <AR_Scan
              mindFile={mindFile}
              gltfFile={gltfFile}
              isSuccess={setIsSuccess}
              isArea={ischeckArea}
            />
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      {isSuccess ? (
        <Link to="/ar_success/5">
          <div className="btn">
            <button className="btn-ar" onClick={(localStorage.getItem("isRandom") === "y") ? checkStateRan5: checkState5}>
              Next
            </button>
          </div>
        </Link>
      ) : (
        ""
      )}
    </>
  );
}

export default AR5;
