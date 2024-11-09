import React from 'react'
import "./TodaysMeals.css"

const TodaysMeals = () => {
  return (
    <div className='meals-container'>
        <section className='meal-section'>
            <span className="meal-section__icon"><img src={require("../../assets/breakfast-icon.jpg")} alt="Breakfast icon" /></span>
            <div className="meal-menu"><h3>Breakfast</h3></div>
        </section>
        </div>
  )
}

export default TodaysMeals