import { MealsAPI } from "../api/Api";
export const randInt = (min = 0, max = 10) => {
  return Math.floor((max - min + 1 ) * Math.random()) + min
}


export const getRandomMealList = async (length = 10) => {
  const mealsList = [];
  for (let i = 0; i < length; i++) {
    let meal = await MealsAPI.getRandomMeal();
    meal = meal[0];
    mealsList.push(meal);
  }
  return mealsList;
};
export const getSeveralByCategory = async (length = 10, category) => {
  let meals = await MealsAPI.getByCategory(category);
  meals = meals.meals?.slice(0, length);
  return meals;
};
export const calcTotalCalories = async (meals) => {
  const resolvedMeals = await Promise.all(
    meals.map((meal) => MealsAPI.getMealData(meal.idMeal))
  );

  return resolvedMeals.reduce((acc, current) => acc + current.calories, 0);
};
export const getLunchMeals = async () => {
  const [{meals: starters}, {meals: secondDishes}] = await Promise.all([
    MealsAPI.getByCategory("Starter"),
    MealsAPI.getByCategory("Beef"),
  ]);
  
  return [starters[1], secondDishes[1]];
};
export const getSnack = async () => {
  const {meals: snack} = await MealsAPI.getByCategory("Side")
  
  return [snack[0]];
};
export const getDinner = async () => {
  const {meals: dinner} = await MealsAPI.getByCategory("Starter")
  
  return [dinner[3]];
};
