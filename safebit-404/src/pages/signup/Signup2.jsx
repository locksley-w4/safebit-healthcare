import React from "react";
import "./signup.css"; // Ensure the styles for custom checkboxes are included

const SignupPage2 = ({
  formData,
  handleChange,
  goalsList,
  diseasesList,
  previousPage,
  handleSubmit,
  validationErrors,
}) => {
  const toggleCheckbox = (category, value) => {
    const selectedItems = formData[category];
    if (selectedItems.includes(value)) {
      // Remove the item if it’s already selected
      handleChange({
        target: {
          name: category,
          value: selectedItems.filter((item) => item !== value),
        },
      });
    } else {
      // Add the item if it’s not selected
      handleChange({
        target: {
          name: category,
          value: [...selectedItems, value],
        },
      });
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>Height</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        {validationErrors.height && (
          <p style={{ color: "red" }}>{validationErrors.height}</p>
        )}
      </div>

      <div>
        <label>Weight</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        {validationErrors.weight && (
          <p style={{ color: "red" }}>{validationErrors.weight}</p>
        )}
      </div>

      <div>
        <label>Daily Intake Goal (calories):</label>
        <input
          type="number"
          name="dailyIntakeGoal"
          value={formData.dailyIntakeGoal}
          onChange={handleChange}
        />
        {validationErrors.dailyIntakeGoal && (
          <p style={{ color: "red" }}>{validationErrors.dailyIntakeGoal}</p>
        )}
      </div>

      {/* Goals Section Styled as Clickable Boxes */}
      <div>
        <label>Goals:</label>
        <div className="checkbox-container">
          {goalsList.map((goal) => (
            <div
              key={goal}
              className={`checkbox-item ${
                formData.goals.includes(goal) ? "selected" : ""
              }`}
              onClick={() => toggleCheckbox("goals", goal)}
            >
              {goal}
            </div>
          ))}
        </div>
      </div>

      {/* Diseases Section Styled as Clickable Boxes */}
      <div>
        <label>Diseases:</label>
        <div className="checkbox-container">
          {diseasesList.map((disease) => (
            <div
              key={disease}
              className={`checkbox-item ${
                formData.diseases.includes(disease) ? "selected" : ""
              }`}
              onClick={() => toggleCheckbox("diseases", disease)}
            >
              {disease}
            </div>
          ))}
        </div>
      </div>

      <button className="back_btn" type="button" onClick={previousPage}>
        Back
      </button>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default SignupPage2;
