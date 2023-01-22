import React from "react";
import { PngYourlocaton } from "../assets";
import Fade from "react-reveal/Fade";

export default function YourLocationMurree() {
  return (
    <div className="your__location__in__murree" id="location__section">
      <div className="your__location__in__murree__left__bg"></div>
      <div className="your__location__in__murree__container">
        <img
          src={PngYourlocaton}
          alt="yourlocaton"
          className="your__location__in__murree__container__img"
        />

        <Fade left>
          <div className="your__location__in__murree__container__img__heading">
            your new location in <span>MURREE!</span>
          </div>
        </Fade>
      </div>
    </div>
  );
}
