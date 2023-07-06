import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`
const eyeColorImage = {
  blue: BlueBaby,
  sun: SunBaby,
  glowing: GlowingBaby,
}

function BabyHog(props) {
  const [weight, setWeight] = useState(0);
  
  function handleChangeWeight(e) {
    e.preventDefault()
    const {name} = e.target;
    setWeight((prevWeight) => {
      if (name === "+") {
        return prevWeight + 1;
      } else if (name === "-") {
        return prevWeight > 0 ? prevWeight -1 : 0;
      }
      return prevWeight;
    })
  }
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
 

  return (
    <li className="hogbabies">
      <h1>Name: {props.name}</h1>
      <h3>Weight: {weight}</h3> 
      <h3>Hobby:{props.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>
      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>
      <div className="hb-wrap">
        <img
          src={eyeColorImage[props.eyeColor]}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
