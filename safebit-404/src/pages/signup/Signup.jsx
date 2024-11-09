import React, { useState } from "react";
import SignupPage1 from "./Signup1";
import SignupPage2 from "./Signup2";
import "./signup.css";
const Signup = () => {
  const [page, setPage] = useState(1);
  const [validationErrors, setValidationErrors] = useState({});
  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    gender: "male",
    email: "",
    username: "",
    password: "",
    weight: "",
    height: "",
    dailyIntakeGoal: "",
    goals: [],
    diseases: [],
  });

  const goalsList = [
    "Lose Weight",
    "Gain Muscle",
    "Improve Endurance",
    "Balanced Diet",
    "Increase Flexibility",
    "Run a Marathon",
    "Reduce Stress",
  ];

  const diseasesList = [
    "Obesity",
    "Diabetes",
    "Hypertension",
    "Heart Disease",
    "High Cholesterol",
    "Asthma",
    "Arthritis",
    "Sleep Apnea",
    "Metabolic Syndrome",
    "Fatty Liver Disease",
    "Stroke",
    "Gallbladder Disease",
    "Gout",
    "Cancer",
    "Respiratory Problems",
    "Mental Health Issues",
    "Kidney Disease",
    "Anemia",
    "Liver Disease",
    "Thyroid Disorders",
    "Digestive Disorders",
  ];

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    if (type === "select-multiple") {
      const values = Array.from(selectedOptions, (option) => option.value);
      setFormData({ ...formData, [name]: values });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validatePage1 = () => {
    const errors = {};
    if (!formData.fullname) errors.fullname = "Full name is required.";
    if (!formData.age) errors.age = "Age is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.username) errors.username = "Username is required.";
    if (!formData.password) errors.password = "Password is required.";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validatePage2 = () => {
    const errors = {};
    if (!formData.weight) errors.weight = "Weight is required.";
    if (!formData.height) errors.height = "Height is required.";
    if (!formData.dailyIntakeGoal)
      errors.dailyIntakeGoal = "Daily intake goal is required.";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextPage = () => {
    if (validatePage1()) {
      setPage(page + 1);
      setValidationErrors({});
    }
  };

  const previousPage = () => {
    setPage(page - 1);
    setValidationErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePage2()) {
      console.log(formData);
      localStorage.setItem("user", JSON.stringify(formData));
    }
  };

  return (
    <div>
      {page === 1 ? (
        <SignupPage1
          formData={formData}
          handleChange={handleChange}
          nextPage={nextPage}
          validationErrors={validationErrors}
        />
      ) : (
        <SignupPage2
          formData={formData}
          handleChange={handleChange}
          goalsList={goalsList}
          diseasesList={diseasesList}
          previousPage={previousPage}
          handleSubmit={handleSubmit}
          validationErrors={validationErrors}
        />
      )}
    </div>
  );
};

export default Signup;
