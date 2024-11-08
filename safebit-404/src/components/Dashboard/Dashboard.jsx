import React from "react";
import cl from "./Dashboard.module.css";

const Dashboard = ({ style, ...props }) => {
  return (
    <div style={{ ...style }} className={cl.dashboard}>
      <h2>My Calories</h2>
      <div className={cl.figures}>
        <div className={cl.figures__total}>
          <div className={cl.figures__total__chart}>
            <img
              src={require("../../assets/Graph-pie(4).png")}
              alt="carbohydrates"
            />
          </div>
          <span>1050 <br/><strong>KCAL</strong></span>
        </div>
        <div className={cl.figures__stat}>
          <div className={cl.figures__stat__pieChart}>
            <img
              src={require("../../assets/Graph-pie(1).png")}
              alt="carbohydrates"
            />
            <i>Carbohydrates</i>
            <br />
            <span>150g / 300g</span>
          </div>
        </div>
        <div className={cl.figures__stat}>
          <div className={cl.figures__stat__pieChart}>
            <img src={require("../../assets/Graph-pie(2).png")} alt="protein" />
            <i>Protein</i>
            <br />
            <span>40g / 60g</span>
          </div>
        </div>
        <div className={cl.figures__stat}>
          <div className={cl.figures__stat__pieChart}>
            <img src={require("../../assets/Graph-pie(3).png")} alt="fat" />
            <i>Fat</i>
            <br />
            <span>40g / 60g</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
