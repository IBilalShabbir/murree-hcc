import { Facebook, Instagram, Linkedin, Youtube } from "react-feather";
import { PngHolidaycountry, PngLogo } from "../assets";
import { Link } from "../router";
import Fade from "react-reveal/Fade";

export default function Footer() {
  const navLinks = [
    {
      label: "Features",
      to: "/",
    },
    {
      label: "Inventory",
      to: "/",
    },
    {
      label: "Location",
      to: "/",
    },
  ];
  return (
    <div className="footer">
      <Fade left distance="30%">
        <img
          src={PngHolidaycountry}
          alt="holidaycountry"
          className="footer__img"
        />
      </Fade>
      <div className="footer__container">
        <Fade top distance="30%">
          <img
            src={PngLogo}
            alt="logo"
            className="footer__container__top_img"
          />
        </Fade>
        <Fade left distance="30%">
          <div className="footer__container__heading">Want to know more?</div>
        </Fade>
        <Fade right distance="30%">
          <div className="footer__container__text">
            Dream Home is a gated community with a great location. Located
            downtown, you’re within walking distance of Parks, and the best
            shopping, dining and entertainment Getting around is a breeze, with
            easy access to freeways, buses and trolleys.
          </div>
        </Fade>
        <div className="footer__container__btn__entry">
          <Fade bottom distance="100%">
            <button className="footer__container__btn">Get Started</button>
          </Fade>
        </div>
        <div className="footer__container__btn__entry__hr"></div>
        <div className="footer__container__bottom">
          <div className="footer__container__bottom__left">
            <img
              src={PngLogo}
              alt="logo"
              className="footer__container__bottom__left__img"
            />
          </div>
          <div className="footer__container__bottom__middle">
            {navLinks.map((link) => {
              return (
                <Link
                  className="footer__container__bottom__middle__link"
                  to={link.to}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="footer__container__bottom__right">
            <a href="#" className="footer__container__bottom__right__entry">
              <Linkedin />
            </a>
            <a href="#" className="footer__container__bottom__right__entry">
              <Facebook />
            </a>
            <a href="#" className="footer__container__bottom__right__entry">
              <Instagram />
            </a>
            <a href="#" className="footer__container__bottom__right__entry">
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
