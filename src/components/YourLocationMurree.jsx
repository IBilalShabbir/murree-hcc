import React from "react";
import { PngYourlocaton } from "../assets";

export default function YourLocationMurree() {
  return (
    <div className="your__location__in__murree">
      <div className="your__location__in__murree__left__bg"></div>
      <div className="your__location__in__murree__container">
        <img
          src={PngYourlocaton}
          alt="yourlocaton"
          className="your__location__in__murree__container__img"
        />
        <div className="your__location__in__murree__container__img__heading">
          your new location in <span>MURREE!</span>
        </div>
      </div>
    </div>
  );
}
