import React, { useState } from "react";

function Searching(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toUpperCase());
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      setSearchTerm("");
      console.log("Escape");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInput}
        onKeyDown={handleEscapeKey}
      />
      <button>Search</button>
      {searchTerm && (
        <div>
          {props.data
            .filter((item) =>
              item.name.toUpperCase().startsWith(searchTerm)
            )
            .map((item) => (
              <p key={item.code}>{item.name}</p>
            ))}
        </div>
      )}
    </div>
  );
}

export default Searching;
