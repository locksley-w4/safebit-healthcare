import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import TodaysMeals from "../components/TodaysMeals/TodaysMeals";
import { useQuery } from "@tanstack/react-query";
import { getSeveralByCategory } from "../utilities/utils";

const Homepage = () => {
  const [meals, setMeals] = useState({});
  const { data: breakfastMeals } = useQuery({
    queryFn: () => getSeveralByCategory(2, "Breakfast"),
    queryKey: ["breakfast"],
  });
  
  useEffect(() => {
    if (breakfastMeals)
      setMeals((prevMeals) => ({ ...prevMeals, breakfast: breakfastMeals }));
  }, [breakfastMeals]);

  return (
    <div>
      <Dashboard style={{ marginTop: 20 }} />
      <TodaysMeals meals={meals} />
    </div>
  );
};

export default Homepage;
