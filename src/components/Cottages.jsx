import React from "react";
import { PngCardimgone, PngCardimgthree, PngCardimgtwo } from "../assets";

export default function Cottages() {
  return (
    <div className="cottages__section">
      <div className="cottages__section__container">
        <div className="cottages__section__container__heading">Cottages</div>
        <div className="cottages__section__container__entries">
          <div className="cottages__section__container__card">
            <img
              src={PngCardimgone}
              alt="PngCardimgone"
              className="cottages__section__container__card__image"
            />
            <div className="cottages__section__container__card__entry">
              <div className="cottages__section__container__card__heading">
                Studio
              </div>
              <div className="cottages__section__container__card__subheading">
                Cottage
              </div>
            </div>
          </div>
          <div className="cottages__section__container__card">
            <img
              src={PngCardimgtwo}
              alt="PngCardimgone"
              className="cottages__section__container__card__image"
            />
            <div className="cottages__section__container__card__entry">
              <div className="cottages__section__container__card__heading">
                Studio
              </div>
              <div className="cottages__section__container__card__subheading">
                Cottage
              </div>
            </div>
          </div>
          <div className="cottages__section__container__card">
            <img
              src={PngCardimgthree}
              alt="PngCardimgone"
              className="cottages__section__container__card__image"
            />
            <div className="cottages__section__container__card__entry">
              <div className="cottages__section__container__card__heading">
                Studio
              </div>
              <div className="cottages__section__container__card__subheading">
                Cottage
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
