import React, { useEffect } from "react";
import "./TodaysMeals.css";
import { useState } from "react";
import { calcTotalCalories } from "../../utilities/utils";

const TodaysMeals = ({ meals: _meals }) => {
  // const [breakfast, setBreakfast] = useState(null);
  const [meals, setMeals] = useState({});
  useEffect(() => {
    if (_meals) setMeals(_meals);
  }, [_meals]);

  const mealsMapped = Object.keys(meals).map((key) => {
    // console.log(meals[key][0]);
    // calcTotalCalories(meals[key]);
    
    return (
      <section className="meal-section" key={key}>
        <span className="meal-section__icon">
          <img
            src={require("../../assets/breakfast-icon.jpg")}
            alt="Breakfast icon"
          />
        </span>
        <div className="meal-menu">
          <h3>Breakfast</h3>
          {meals[key].map((meal) => (
            <div className="meal" key={meal.idMeal}>
              <span className="meal-section__icon">
                <img src={meal.strMealThumb} alt="Breakfast icon" />
              </span>
              <p>{meal.strMeal}</p>
            </div>
          ))}
        </div>
      </section>
    );
  });

  return <div className="meals-container">{mealsMapped}</div>;
};

export default TodaysMeals;
