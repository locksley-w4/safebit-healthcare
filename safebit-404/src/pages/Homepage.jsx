import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import TodaysMeals from '../components/TodaysMeals/TodaysMeals'

const Homepage = () => {
  return (
    <div>
         <Dashboard style={{marginTop: 20}}/>
         <TodaysMeals />
    </div>
  )
}   

export default Homepage