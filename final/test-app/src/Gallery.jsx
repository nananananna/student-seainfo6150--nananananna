// Gallery.js
import React, { useState } from "react";
import galleryData from "./data";
import "./Gallery.css";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredItems =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  return (
    <div className="details">
      <div>
        <label>
          Filter by category:
          <select
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="cats">cats</option>
            <option value="dogs">dogs</option>
            {/* Add more categories */}
          </select>
        </label>
      </div>

      <div>
        {filteredItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <img
              src={item.imageSrc}
              alt={item.title}
              style={{ maxWidth: "100%" }}
              className="filter-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
