import React from "react";

const SignupPage1 = ({
  formData,
  handleChange,
  nextPage,
  validationErrors,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        nextPage();
      }}
    >
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
        {validationErrors.fullname && (
          <p style={{ color: "red" }}>{validationErrors.fullname}</p>
        )}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {validationErrors.age && (
          <p style={{ color: "red" }}>{validationErrors.age}</p>
        )}
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {validationErrors.email && (
          <p style={{ color: "red" }}>{validationErrors.email}</p>
        )}
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {validationErrors.username && (
          <p style={{ color: "red" }}>{validationErrors.username}</p>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {validationErrors.password && (
          <p style={{ color: "red" }}>{validationErrors.password}</p>
        )}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default SignupPage1;
