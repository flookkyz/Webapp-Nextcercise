import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/Checkpoint_detail.css";
import { RiMapPin2Fill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import axios from "axios";

const url = process.env.REACT_APP_GET_URL;

function Checkpoint_detail() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      await axios.get(`${url}/checkpoint`).then((res) => {
        // console.log(res.data[0]);
        setData(res.data[0]);
        // console.log("data = ", res.data[0]);
        // console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 0);
  }, []);

  let { idcheckpoint } = useParams();
  const locationName = `locationName${idcheckpoint}`;
  const summary = `summary${idcheckpoint}`;
  const description = `description${idcheckpoint}`;
  const latitude = `latitude${idcheckpoint}`;
  const longitude = `longitude${idcheckpoint}`;
  return (
    <>
      <div className="center">
        <div className="detail">
          <div className="detail-t">Check point {idcheckpoint}</div>
          <div className="detail-b">
            <div className="detail-center">
              <div className="detail-location-center">
                <RiMapPin2Fill className="map-icons" />
                <span className="text-location">{data[locationName]}</span>
              </div>
              <div className="detail-desc">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.34688 7.18645C6.22357 7.07054 6.0584 7.00639 5.88697 7.00784C5.71553 7.00929 5.55154 7.07622 5.43031 7.19421C5.30908 7.31219 5.24032 7.4718 5.23883 7.63865C5.23734 7.80551 5.30324 7.96625 5.42235 8.08627L6.34688 7.18645ZM7.84615 9.54545L7.38388 9.99536C7.5065 10.1147 7.67278 10.1817 7.84615 10.1817C8.01953 10.1817 8.18581 10.1147 8.30842 9.99536L7.84615 9.54545ZM11.9046 6.49536C12.0237 6.37534 12.0896 6.2146 12.0881 6.04774C12.0866 5.88089 12.0178 5.72128 11.8966 5.6033C11.7754 5.48531 11.6114 5.41838 11.44 5.41693C11.2685 5.41548 11.1034 5.47963 10.98 5.59555L11.9046 6.49536ZM5.42235 8.08627L7.38388 9.99536L8.30842 9.09554L6.34688 7.18645L5.42235 8.08627ZM8.30842 9.99536L11.9046 6.49536L10.98 5.59555L7.38388 9.09554L8.30842 9.99536ZM17 12.0909V3.81818H15.6923V12.0909H17ZM15.0404 1.90909H9.15385V3.18182H15.0404V1.90909ZM9.15385 1.90909C9.01785 1.90909 8.91846 1.869 8.79292 1.764C8.63273 1.63036 8.50392 1.46045 8.26658 1.18364C8.05277 0.933546 7.77292 0.628727 7.38388 0.394545C6.98177 0.150182 6.49465 0 5.88462 0V1.27273C6.256 1.27273 6.50381 1.36055 6.69408 1.47509C6.89742 1.59855 7.06742 1.771 7.26227 1.99818C7.43358 2.19864 7.67223 2.50536 7.94227 2.73C8.245 2.98327 8.63535 3.18182 9.15385 3.18182V1.90909ZM5.88462 0H1.96154V1.27273H5.88462V0ZM0 1.90909V12.0909H1.30769V1.90909H0ZM1.96154 14H15.0385V12.7273H1.96154V14ZM1.96154 0C1.44131 0 0.942381 0.201136 0.574521 0.55916C0.206662 0.917184 0 1.40277 0 1.90909H1.30769C1.30769 1.74032 1.37658 1.57846 1.4992 1.45911C1.62182 1.33977 1.78813 1.27273 1.96154 1.27273V0ZM17 3.81818C17 2.765 16.1252 1.90909 15.0404 1.90909V3.18182C15.4 3.18182 15.6923 3.46564 15.6923 3.81818H17ZM0 12.0909C0 12.5972 0.206662 13.0828 0.574521 13.4408C0.942381 13.7989 1.44131 14 1.96154 14V12.7273C1.78813 12.7273 1.62182 12.6602 1.4992 12.5409C1.37658 12.4215 1.30769 12.2597 1.30769 12.0909H0ZM15.6923 12.0909C15.6923 12.2597 15.6234 12.4215 15.5008 12.5409C15.3782 12.6602 15.2119 12.7273 15.0385 12.7273V14C15.5587 14 16.0576 13.7989 16.4255 13.4408C16.7933 13.0828 17 12.5972 17 12.0909H15.6923Z"
                    fill="black"
                  />
                </svg>
                <span className="text-desc">{data[summary]}</span>
              </div>
              <center><div className="detail-long-desc">
                <span>{data[description]}</span>
              </div>
              <Link
                to={`/checkpoint/ar${idcheckpoint}/${idcheckpoint}`}
                className="link"
              >
                <div className="detail-button">
                  <button className="btn-detail">NEXT</button>
                </div>
              </Link></center>
            </div>
          </div>
        </div>
      </div>
      <div className="buttom-btn">
        <Link to="/" className="link">
          <div className="btn-home">
            <AiFillHome className="home-icons" />
            <span className="text-btn">HOME</span>
          </div>
        </Link>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${data[latitude]},${data[longitude]}`}
          className="link"
          target="_blank"
        >
          <center className="btn-map">
            <svg
              width="46"
              height="50"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 0C10.2974 0 0 10.2974 0 23C0 35.7026 10.2974 46 23 46C35.7026 46 46 35.7026 46 23C46 10.2974 35.7026 0 23 0ZM23 7.79113C29.3321 7.79113 34.4663 12.9254 34.4663 19.2574C34.4663 21.1755 33.9407 23.7076 32.8603 25.1393L23 38.2089L13.1396 25.1394C11.9502 23.563 11.5337 21.3751 11.5337 19.2575C11.5337 12.9254 16.6679 7.79113 23 7.79113ZM23 14.434C20.3357 14.434 18.1765 16.5932 18.1765 19.2574C18.1765 21.9217 20.3357 24.0809 23 24.0809C25.6643 24.0809 27.8235 21.9217 27.8235 19.2574C27.8235 16.5932 25.6643 14.434 23 14.434Z"
                fill="white"
              />
            </svg>
            <span className="text-btn">MAP</span>
          </center>
        </a>
      </div>
    </>
  );
}

export default Checkpoint_detail;
