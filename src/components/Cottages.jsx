import { PngCardimgone, PngCardimgthree, PngCardimgtwo } from "../assets";
import Fade from "react-reveal/Fade";

export default function Cottages() {
  return (
    <div className="cottages__section">
      <div className="cottages__section__container">
        <Fade right>
          <div className="cottages__section__container__heading">Cottages</div>
        </Fade>
        <div className="cottages__section__container__entries">
          <div className="cottages__section__container__card">
            <img
              src={PngCardimgone}
              alt="PngCardimgone"
              className="cottages__section__container__card__image"
            />
            <Fade bottom distance="30%">
              <div className="cottages__section__container__card__entry">
                <div className="cottages__section__container__card__heading">
                  Studio
                </div>
                <div className="cottages__section__container__card__subheading">
                  Cottage
                </div>
              </div>
            </Fade>
          </div>
          <div className="cottages__section__container__card">
            <img
              src={PngCardimgtwo}
              alt="PngCardimgone"
              className="cottages__section__container__card__image"
            />
            <Fade bottom distance="30%">
              <div className="cottages__section__container__card__entry">
                <div className="cottages__section__container__card__heading">
                  ONE BED
                </div>
                <div className="cottages__section__container__card__subheading">
                  Cottage
                </div>
              </div>
            </Fade>
          </div>
          <div className="cottages__section__container__card">
            <img
              src={PngCardimgthree}
              alt="PngCardimgone"
              className="cottages__section__container__card__image"
            />
            <Fade bottom distance="30%">
              <div className="cottages__section__container__card__entry">
                <div className="cottages__section__container__card__heading">
                  TWO BED
                </div>
                <div className="cottages__section__container__card__subheading">
                  Cottage
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
