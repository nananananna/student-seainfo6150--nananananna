import React from "react";
import "./Panels.css";
import Gallery from "./Gallery";
import cat1 from "./public/cat1.jpeg";
const Panels = () => {
  return (
    <div id="main-content">
      <div className="panel">
        <img src={cat1} alt="cat1" className="panel-cat" />
        <h2>Abyssinian Cat Breed</h2>
        <p>
          With unique ears that curl back, and an inquisitive expression
          reminiscent of happy surprise, the American Curl brings a smile to
          everyone who meets her.
        </p>
        <h3>Temperament</h3>
        <p>
          A friendly, people-oriented breed, American Curls are known as the
          Peter Pan of cats because they retain their kitten-like personality
          throughout life. With her outstanding temperament, the Curl makes an
          affectionate soulmate and easily adjusts to other pets and children.
        </p>
        <h3>Characteristics</h3>
        <p>
          The American Curl has distinctive curled ears that form a graceful
          arc, giving her an alert, perky expression. In addition to their ears,
          Curls are known for their silky, flat coat which can be long or short.
        </p>
        <h3>Lifespan</h3>
        <p>13+ years</p>
        <h3>Colors</h3>
        <p>
          The American Curl’s coat can be brown, white, black, blue, red, cream,
          chocolate, lilac, silver or golden, with various patterns and
          shadings.
        </p>
      </div>
      <Gallery />
    </div>
  );
};

export default Panels;
