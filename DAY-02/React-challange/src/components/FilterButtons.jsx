import React from "react";

const FilterButtons = ({ status, setStatus }) => {
  return (
    <div className="filter-container">
      <button
        className={`filter-btn ${status === "all" ? "selected" : ""}`}
        onClick={() => setStatus("all")}
      >
        All
      </button>

      <button
        className={`filter-btn ${status === "active" ? "selected" : ""}`}
        onClick={() => setStatus("active")}
      >
        Active
      </button>

      <button
        className={`filter-btn ${status === "inactive" ? "selected" : ""}`}
        onClick={() => setStatus("inactive")}
      >
        Inactive
      </button>
    </div>
  );
};

export default FilterButtons;
