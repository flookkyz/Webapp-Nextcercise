import React, { useEffect, useRef, useState } from "react";
import "../css/camera.css";
import { useParams } from "react-router-dom";
import useCheck from "../hook/useCheckstate";
import axios from "axios";
import Swal from "sweetalert2";

const url = "https://mxrdem.xyz/api/v1/checkpointno1";

function AR_Scan(props) {
  let { idar } = useParams();

  const [data, setData] = useState([]);
  const [arFile, setArFile] = useState("");

  /*const getData = async () => {
    try {
      await axios.get(url).then((res) => {
        console.log(res.data[0]);
        console.log("55555");
        const data = res.data[0];
        const url = "https://mxrdem.xyz/api/v1/stream-files/checkpoint-no1/";

        // setArFile(url2)
        if (props.mind == "1") {
          // console.log(`${url}${data.startfile1}`);
          setArFile(`${url}${data.startfile1}`);
        } else if (props.mind == "2") {
          setArFile(`${url}${data.startfile2}`);
        } else if (props.mind == "3") {
          setArFile(`${url}${data.startfile3}`);
        } else if (props.mind == "4") {
          setArFile(`${url}${data.startfile4}`);
        } else if (props.mind == "5") {
          setArFile(`${url}${data.startfile5}`);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };*/

  useEffect(() => {
    // getData();
    cam();
    console.log("isArea : ", props.isArea);
  }, []);

  const sceneRef = useRef(null);

  const cam = async () => {
    console.log("เปิด");
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    
    sceneEl.addEventListener("renderstart", async () => {
      // await new Promise(resolve => setTimeout(resolve, 5000));
      if(props.isArea) {
        await arSystem.start(); // start AR
        console.log("AR Scan Success");
      } else {
        alert("คุณอยู่นอกพื้นที่สแกน AR")
        window.location.assign("../../")
        // Swal.fire({
        //   icon: 'error',
        //   title: 'ERROR!',
        //   text: 'คุณอยู่นอกพื้นที่สแกน AR'
        // })
      }
    });

    sceneEl.addEventListener("targetFound", (event) => {
      alert("Scan AR Successfully!")
      props.isSuccess(true)
      /*Swal.fire({
        icon: 'success',
        title: 'Yep!',
        text: 'Scan AR Successfully!',
      })*/
    });

    sceneEl.addEventListener("targetLost", (event) => { });

    return () => {
      arSystem.stop();
    };
  };

  return (
    <div className="camera">
      {/* <h1>isArea : {props.isArea}</h1> */}
      {/* <button onClick={() => cam()}>กดดดด</button>
      <div>Mind : {props.mindFile}</div>
      <div>Gltf : {props.gltfFile}</div> */}
      <a-scene
        ref={sceneRef}
        mindar-image={`imageTargetSrc: ${props.mindFile}; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;`}
        color-space="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets>
          <img
            id="card"
            src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/card.png"
          />
          <a-asset-item id="avatarModel" src={props.gltfFile}></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-plane
            src="#card"
            position="0 0 0"
            height="0.552"
            width="0"
            rotation="0 0 0"
          ></a-plane>
          <a-gltf-model
            rotation="0 0 0 "
            position="0 0 0.1"
            scale="0.2 0.2 0.2"
            src="#avatarModel"
            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
          ></a-gltf-model>
        </a-entity>
      </a-scene>
    </div>
  );
}

export default AR_Scan;
