import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import TodaysMeals from "../components/TodaysMeals/TodaysMeals";
import { useQuery } from "@tanstack/react-query";
import {
  getDinner,
  getLunchMeals,
  getSeveralByCategory,
  getSnack,
} from "../utilities/utils";

const Homepage = () => {
  const [meals, setMeals] = useState({});
  const { data: breakfastMeals } = useQuery({
    queryFn: () => getSeveralByCategory(2, "Breakfast"),
    queryKey: ["breakfast"],
  });
  const { data: lunchMeals } = useQuery({
    queryFn: () => getLunchMeals(),
    queryKey: ["lunch"],
  });
  const { data: snack } = useQuery({
    queryFn: () => getSnack(),
    queryKey: ["snack"],
  });
  const { data: dinner } = useQuery({
    queryFn: () => getDinner(),
    queryKey: ["dinner"],
  });

  useEffect(() => {
    if (breakfastMeals && lunchMeals && snack && dinner) {
      setMeals((prevMeals) => ({
        ...prevMeals,
        breakfast: breakfastMeals,
        lunch: lunchMeals,
        snack,
        dinner,
      }));
    }
  }, [breakfastMeals, lunchMeals, snack, dinner]);

  return (
    <div>
      <Dashboard style={{ marginTop: 20 }} />
      <TodaysMeals meals={meals} />
    </div>
  );
};

export default Homepage;
