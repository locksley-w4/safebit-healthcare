import React, { useEffect } from "react";
import "./TodaysMeals.css";
import { useState } from "react";

const TodaysMeals = ({ meals: _meals }) => {
  // const [breakfast, setBreakfast] = useState(null);
  const [meals, setMeals] = useState({});

  useEffect(() => {
    if (_meals) setMeals(_meals);
    console.log(meals);
  }, [_meals]);

  const mealsMapped = Object.keys(meals).map((key) => (
    <section className="meal-section" key={key}>
      <span className="meal-section__icon">
        <img
          src={require("../../assets/breakfast-icon.jpg")}
          alt="Breakfast icon"
        />
      </span>
      <div className="meal-menu">
        <h3>Breakfast</h3>
        {(Array.isArray(meals[key]) ? meals[key] : []).map((meal) => (
          <div className="meal" key={meal.id}>
            <span className="meal-section__icon">
              <img src={meal.strMealThumb} alt="Breakfast icon" />
            </span>
          </div>
        ))}
      </div>
    </section>
  ));

  return (
    <div className="meals-container">
      {mealsMapped}
      {/* <section className="meal-section" id="today-braekfast">
        <span className="meal-section__icon">
          <img
            src={require("../../assets/breakfast-icon.jpg")}
            alt="Breakfast icon"
          />
        </span>
        <div className="meal-menu">
          <h3>Breakfast</h3>
          <p>{meals.breakfast.mealsList}</p>
          <p>{meals.breakfast.mealsList}</p>
        </div>
      </section> */}
      {}
    </div>
  );
};

export default TodaysMeals;
