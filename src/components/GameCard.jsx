
import bg from "../assets/images/game.jpg";

import controller from "../assets/images/controller.jpeg";
import "../App.css";

const GameCard = () => {
  return (
    <div className="container">
      <div className="gameCard">
        <div className="imgBox">
          <img src={bg} alt="" className="img" />
        </div>

        <div className="upImage">
          <img src={controller} alt="" className="imageup" />
        </div>
        <div className="glass">
          <svg className="svg">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M0.001,0.081 C0,0.031,0.045,-0.007,0.093,0.001 C0.454,0.066,0.56,0.067,0.908,0.003 C0.956,-0.006,1,0.032,1,0.082 L0.994,0.921 C0.994,0.965,0.959,1,0.916,1 H0.084 C0.041,1,0.006,0.965,0.006,0.921 L0.001,0.081"></path>
            </clipPath>
          </svg>

          <div className="clipped"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
