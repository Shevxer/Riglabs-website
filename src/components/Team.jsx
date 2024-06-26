import React from "react";
import "./Team.scss";
import {
  alokPic,
  aryaPic,
  clintImg,
  nikuPic,
  omkarPic,
  shivamPic,
  vanshPic,
} from "../assets";

const Team = () => {
  return (
    <div className="team-container" id="team">
      <div className="team-title">
        <div>
          <h2 className="our">OUR </h2>
          <h2>TEAM</h2>
        </div>
        {/* <button className="btn">view all games</button> */}
      </div>
      <div className="team-card-container">
        <div className="team-card">
          <img src={shivamPic} />
          <div className="title">
            <h2>Shivam</h2>
            <p>Co-founder</p>
          </div>
        </div>
        <div className="team-card">
          <img src={omkarPic} />
          <div className="title">
            <h2>Omkar</h2>
            <p>Co-founder</p>
          </div>
        </div>
        <div className="team-card">
          <img src={vanshPic} />
          <div className="title">
            <h2>Vansh</h2>
            <p> Product Head</p>
          </div>
        </div>
        {/* <div className="team-card">
          <img src={alokPic} />
          <div className="title">
            <h2>Alok</h2>
            <p>Blockchain Lead </p>
          </div>
        </div> */}
        <div className="team-card">
          <img src={nikuPic} />
          <div className="title">
            <h2>Niku Singh</h2>
            <p>Fullstack Dev </p>
          </div>
        </div>
        <div className="team-card">
          <img src={nithishPic} />
          <div className="title">
            <h2>Nithish Kondle</h2>
            <p> Backend Developer</p>
          </div>
        </div>
        <div className="team-card">
          <img src={aryaPic} />
          <div className="title">
            <h2>Himanshu Arya</h2>
            <p> DevRel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
