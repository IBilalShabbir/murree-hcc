import { Facebook, Instagram, Linkedin, Youtube } from "react-feather";
import { PngHolidaycountry, PngLogo } from "../assets";
import { Link } from "../router";

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
      <img
        src={PngHolidaycountry}
        alt="holidaycountry"
        className="footer__img"
      />
      <div className="footer__container">
        <img src={PngLogo} alt="logo" className="footer__container__top_img" />
        <div className="footer__container__heading">Want to know more?</div>
        <div className="footer__container__text">
          Dream Home is a gated community with a great location. Located
          downtown, you’re within walking distance of Parks, and the best
          shopping, dining and entertainment Getting around is a breeze, with
          easy access to freeways, buses and trolleys.
        </div>
        <div className="footer__container__btn__entry">
          <button className="footer__container__btn">Get Started</button>
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
