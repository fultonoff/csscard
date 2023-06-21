import bg from "../assets/images/background.png";
import online from "../assets/images/Symbol.png";

import controller from "../assets/images/controller.jpeg";
import "../App.css";

const GameCard = () => {
  return (
    <div className="container">
      <div className="gameCard">
        <div className="imgBox">

          {/* background Image */}
          <img src={bg} alt="background image" className="img" />
        </div>

        <div className="upImage">
          <img src={controller} alt="" className="imageup" />
        </div>
        <div className="glass">
          <svg className="svg">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M0,0.184 C0,0.09,0,0.044,0.024,0.019 C0.048,-0.006,0.087,0.001,0.166,0.016 C0.267,0.034,0.397,0.053,0.5,0.053 C0.603,0.053,0.733,0.034,0.834,0.016 C0.913,0.001,0.952,-0.006,0.976,0.019 C1,0.044,1,0.09,1,0.184 V1 H0 V0.184"></path>
            </clipPath>
          </svg>

          <div className="clipped">
            <div className="content-wrapper">
              <h1 className="title">Game Design</h1>
              <p className="description">
                Always a new challenge. Great place to make new friends.
              </p>

              {/* user */}
              <div className="user-info">
                <div className="user-info__wraper">
                  <img
                    src={online}
                    alt="user icon"
                    className="user-info__icon"
                  />
                  <span className="user-info__detail">28,628 Online</span>
                </div>
                <div className="user-info__wraper">
                  <img
                    src={online}
                    alt="user icon"
                    className="user-info__icon"
                  />
                  <span className="user-info__detail">28,628 Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
