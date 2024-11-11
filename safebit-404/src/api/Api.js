  import axios from "axios";
  export class MealsAPI {
    static async getRandomMeal() {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      return response.data;
    }
    static async getByIngredient(ingredient) {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient
      );
      return response.data;
    }
    static async getByCategory(category) {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category
      );
      return response.data;
    }
    static async getMealData(mealId) {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId
      );

      return response.data.meals[0];
    }
  }
