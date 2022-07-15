import React from "react";
import "../css/success.css";
import { Link, useParams } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";

function AR_Success() {

  let { idar } = useParams();
  const checkpointst1 = JSON.parse(localStorage.getItem("state1"));
  const checkpointst2 = JSON.parse(localStorage.getItem("state2"));
  const checkpointst3 = JSON.parse(localStorage.getItem("state3"));
  const checkpointst4 = JSON.parse(localStorage.getItem("state4"));
  const checkpointst5 = JSON.parse(localStorage.getItem("state5"));

  return (
    <>
      <div className="body-ar-success"></div>
      <div className="ar-success">
        <center>
          <span className="text-h">จุดที่ {idar} สำเร็จ !</span>
          <div className="ar-text-t">
            <div>
              <span>มา Scan Check Point ให้ครบกันเถอะ</span>
            </div>
            <div className="circle-checkpoint">
              {(checkpointst1 === "success") ?
                (<div className="checkpoint-success">
                  <BsCheckLg className="checkpoint-true-icon" />
                </div>) :
                (<div className="checkpoint-default">1</div>)
              }
              {(checkpointst2 === "success") ?
                (<div className="checkpoint-success">
                  <BsCheckLg className="checkpoint-true-icon" />
                </div>) :
                (<div className="checkpoint-default">2</div>)
              }
              {(checkpointst3 === "success") ?
                (<div className="checkpoint-success">
                  <BsCheckLg className="checkpoint-true-icon" />
                </div>) :
                (<div className="checkpoint-default">3</div>)
              }
              {(checkpointst4 === "success") ?
                (<div className="checkpoint-success">
                  <BsCheckLg className="checkpoint-true-icon" />
                </div>) :
                (<div className="checkpoint-default">4</div>)
              }
              {(checkpointst5 === "success") ?
                (<div className="checkpoint-success">
                  <BsCheckLg className="checkpoint-true-icon" />
                </div>) :
                (<div className="checkpoint-default">5</div>)
              }
            </div>
          </div>
          <div>{/* <img src={} alt="success" className="pic-success"/> */}</div>
          <div>
            <Link to="/">
              <button className="btn-sc">Next</button>
            </Link>
          </div>
        </center>
      </div>
    </>
  );
}

export default AR_Success;
