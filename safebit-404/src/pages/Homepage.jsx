import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import TodaysMeals from "../components/TodaysMeals/TodaysMeals";
import { useQuery } from "@tanstack/react-query";
import { getSeveralByCategory } from "../utilities/utils";

const Homepage = () => {
  const [meals, setMeals] = useState({});
  const { data: breakfastMeals, status, error } = useQuery({
    queryFn: () => getSeveralByCategory(10, "Breakfast"),
    queryKey: ["breakfast"],
  });

  useEffect(() => {
    if (status === "success" && breakfastMeals) {
      setMeals((prevMeals) => ({ ...prevMeals, breakfast: breakfastMeals }));
      console.log("Data loaded successfully:", breakfastMeals);
    } else if (status === "error") {
      console.error("Error fetching breakfast meals:", error);
    }
  }, [status, breakfastMeals, error]);

  return (
    <div>
      <Dashboard style={{ marginTop: 20 }} />
      <TodaysMeals meals={meals} />
    </div>
  );
};

export default Homepage;
