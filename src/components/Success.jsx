import React from "react";
import { Link } from "react-router-dom";
import "../css/success.css";
import Pic_Logo from "../pic/logo.png";
import Pic_Success from "../pic/success.png";

function Success() {
  return (
    <>
      <div className="body">
        <center>
          <img src={Pic_Logo} alt="logo" className="logo" />
        </center>
      </div>
      <div className="success">
        <center>
          <span className="text-h">ยินดีด้วย !</span>
          <div className="text-t">
            <div>
              <span>Congratulation,</span>
            </div>
            <div>
              <span>You Have Completed</span>
            </div>
            <div>
              <span>all check points</span>
            </div>
          </div>
          <div>
            <img src={Pic_Success} alt="success" className="pic-success"/>
          </div>
          <div>
           {/* <Link to="/">
           <button className="btn-sc">HOME</button>
           </Link> */}
          </div>
        </center>
      </div>
    </>
  );
}

export default Success;
