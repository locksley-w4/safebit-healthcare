import { MealsAPI } from "../api/Api";

export const getRandomMealList = async (length = 10) => {
  const mealsList = [];
  for (let i = 0; i < length; i++) {
    let meal = await MealsAPI.getRandomMeal();
    meal = meal[0];
    mealsList.push(meal);
  }
  console.log(mealsList);

  return mealsList;
};
export const getSeveralByCategory = async (length = 10, category) => {
  const mealsList = [];
  let meals = await MealsAPI.getByCategory(category);
  meals = meals.meals?.slice(0, length - 1);
  console.log(meals);
  return mealsList;
};
