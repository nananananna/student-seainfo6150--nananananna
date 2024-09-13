import React from "react";
import "./Cards.css";
import cat1 from "./public/cat1.jpeg";
import cat2 from "./public/cat2.jpeg";
import cat3 from "./public/cat3.jpeg";

const Cards = () => {
  return (
    <div id="main-content">
      <h1>cards</h1>
      <div className="cards">
        <div className="card1 card">
          <img src={cat1} alt="cat1" />
          <h2>Abyssinian Cat Breed</h2>
          <p>
            Abyssinians are highly intelligent and intensely inquisitive. They
            love to investigate and will leave no nook or cranny unexplored.
            They’re sometimes referred to as “Aby-grabbys” because they tend to
            take things that grab their interest. The playful Aby loves to jump
            and climb. Keep a variety of toys on hand to keep her occupied,
            including puzzle toys that challenge her intelligence.
          </p>
        </div>
        <div className="card2 card">
          <img src={cat2} alt="cat2" />
          <h2>American Bobtail Cat Breed</h2>
          <p>
            Despite their somewhat wild appearance, American Bobtails are
            devoted companion cats who fit perfectly into families. Social and
            easygoing, they get along well with children and other four-legged
            pets. Confident and friendly, Bobtails are highly intelligent pets
            with dog-like personalities. They love games like fetch and
            hide-and-seek, and even enjoy walking on a leash with their people.
          </p>
        </div>

        <div className="card3 card">
          <img src={cat3} alt="cat3" />
          <h2>American Curl Cat Breed</h2>
          <p>
            A friendly, people-oriented breed, American Curls are known as the
            Peter Pan of cats because they retain their kitten-like personality
            throughout life. With her outstanding temperament, the Curl makes an
            affectionate soulmate and easily adjusts to other pets and children.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
