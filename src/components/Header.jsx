import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { useNavigate } from "react-router-dom";
import { PngLogo } from "../assets";
import { Link } from "../router";

export default function Header() {
  const [checked, setIsChecked] = useState("Home");
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();
  function changeNav() {
    setIsNavOpen(window.innerWidth > 1000);
  }
  useEffect(() => {
    changeNav();
    window.addEventListener("resize", changeNav);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);

  const navLinks = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Features",
      to: "/features",
    },
    {
      label: "Inventory",
      to: "/inventory",
    },
    {
      label: "Location",
      to: "/location",
    },
  ];

  return (
    <div className={isScrolling ? "header header__active" : "header"}>
      <div className="header__content">
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="header__content__logo"
        >
          <img src={PngLogo} alt="logo" />
        </button>
        {isNavOpen && (
          <div className="header__content__nav">
            {navLinks.map((link) => (
              <Link
                className="header__content__nav__link"
                key={link.label}
                to={link.to}
                checked={checked}
                label={link.label}
              >
                <input
                  type="radio"
                  name="header__content__nav__link"
                  checked={checked === link.label}
                  readOnly
                  to={link.to}
                  className="header__content__nav__link__input"
                  onClick={() => {
                    setIsChecked(link.label);
                    document.getElementById("home");
                    if (window.innerWidth < 1000) {
                      setIsNavOpen(false);
                    }
                  }}
                />
                <div className="header__content__nav__link__content">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="header__content__nav__div">
          <button className="header__content__nav__contact__us">
            Contact us
          </button>
          <button
            className="header__content__nav__menu"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            {isNavOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
