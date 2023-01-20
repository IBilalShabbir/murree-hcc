import { useEffect, useState } from "react";
import { X, Menu } from "react-feather";
import { PngLogo } from "../assets";
import Navlink from "./Navlink";

export default function Header() {
  const [checked, setIsChecked] = useState("Home");
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

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
      scrollTo: "home",
      defaultChecked: true,
    },
    {
      label: "Features",
      scrollTo: "features",
    },
    {
      label: "Inventory",
      scrollTo: "inventory",
    },
    {
      label: "Location",
      scrollTo: "location",
    },
  ];
  return (
    <div className={isScrolling ? "header header__active" : "header"}>
      <div className="header__content">
        <button
          onClick={() => {
            document.getElementById("home").checked = true;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="header__content__logo"
        >
          <img src={PngLogo} alt="logo" />
        </button>

        {isNavOpen && (
          <div className="header__content__nav">
            {navLinks.map((link) => (
              <Navlink
                key={link.label}
                scrollTo={link.scrollTo}
                label={link.label}
                checked={checked}
                setIsChecked={setIsChecked}
                setIsNavOpen={setIsNavOpen}
              />
            ))}
          </div>
        )}
        <div className="header__content__buttons">
          <button className="header__content__contact__us">Contact Us</button>
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
