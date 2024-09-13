import React, { useState, useEffect } from "react";

const SkipLink = () => {
  const [showLink, setShowLink] = useState(false);

  const handleKeyUp = (event) => {
    if (event.keyCode === 9) {
      // Detect Tab key press, show the link
      setShowLink(true);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return showLink ? (
    <a href="#main-content" className="skip-link" onClick={handleClick}>
      Skip to main content
    </a>
  ) : null;
};

export default SkipLink;
