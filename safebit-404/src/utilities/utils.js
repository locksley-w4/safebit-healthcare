import { MealsAPI } from "../api/Api";

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
