import React, { useState } from "react";

const FILTERS = ["Show all", "Design", "Branding", "Illustration", "Motion"];

function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <ul className="filter__list">
        {FILTERS.map(el => (
          <li
            key={el}
            className={filter == el ? "filter__list-item-special" : "filter__list-item"}
            onClick={() => setFilter(el)}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;