import React, { useState } from "react";
import "./Accordion.css";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title: "* Abyssinian Cat Breed",
      content:
        "Abyssinians are highly intelligent and intensely inquisitive. They love to investigate and will leave no nook or cranny unexplored. They’re sometimes referred to as “Aby-grabbys” because they tend to take things that grab their interest. The playful Aby loves to jump and climb. Keep a variety of toys on hand to keep her occupied, including puzzle toys that challenge her intelligence.",
    },
    {
      title: "* American Bobtail Cat Breed",
      content:
        "Despite their somewhat wild appearance, American Bobtails are devoted companion cats who fit perfectly into families. Social and easygoing, they get along well with children and other four-legged pets.Confident and friendly, Bobtails are highly intelligent pets with dog-like personalities. They love games like fetch and hide-and-seek, and even enjoy walking on a leash with their people.",
    },
    {
      title: "* American Curl Cat Breed",
      content:
        "A friendly, people-oriented breed, American Curls are known as the Peter Pan of cats because they retain their kitten-like personality throughout life. With her outstanding temperament, the Curl makes an affectionate soulmate and easily adjusts to other pets and children.",
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((section, index) => (
        <div
          key={index}
          className={`accordion-section ${
            activeIndex === index ? "active" : ""
          }`}
        >
          <div
            className="accordion-header"
            onClick={() => handleAccordionClick(index)}
          >
            {section.title}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
