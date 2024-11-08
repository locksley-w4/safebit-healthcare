import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Page is not found</p>
      <Link to={"/"}>Back to home</Link>
    </div>
  );
};

export default NotFoundPage;
