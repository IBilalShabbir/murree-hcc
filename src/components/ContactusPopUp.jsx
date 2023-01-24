import { X } from "react-feather";
import { PngLogo } from "../assets";

export default function ContactusPopUp({ setPopup }) {
  return (
    <div className="contact__us__pop__up">
      <div className="contact__us__pop__up__overlay">
        <div className="contact__us__pop__up__card">
          <div className="contact__us__pop__up__overlay__card__close">
            <button
              onClick={() => {
                setPopup(!true);
              }}
              className="contact__us__pop__up__overlay__card__close__entry"
            >
              <X width={25} color="#ffff" />
            </button>
          </div>
          <div className="contact__us__pop__up__card__middle">
            <img src={PngLogo} alt="logo" />
            <div className="contact__us__pop__up__card__middle__text">
              Register your interest to book your apartment at special
              discounted rates.
            </div>
            <div className="contact__us__pop__up__card__middle__text__detail">
              Kindly fill the form and our representative will get back to you
              for detailed information including Payment Plan, Floor Plans and
              special discounted offers. Your information will be kept
              confidential.
            </div>
            <form
              action=""
              className="contact__us__pop__up__card__middle__text__form"
            >
              <label className="contact__us__pop__up__card__middle__text__form__entry">
                <input
                  type="text"
                  placeholder="Name"
                  className="contact__us__pop__up__card__middle__text__form__entry__input"
                />
                <div className="contact__us__pop__up__card__middle__text__form__entry__input__error"></div>
              </label>
              <label className="contact__us__pop__up__card__middle__text__form__entry">
                <input
                  type="email"
                  placeholder="Email"
                  className="contact__us__pop__up__card__middle__text__form__entry__input"
                />
                <div className="contact__us__pop__up__card__middle__text__form__entry__input__error"></div>
              </label>
              <label className="contact__us__pop__up__card__middle__text__form__entry">
                <input
                  type="text"
                  placeholder="City"
                  className="contact__us__pop__up__card__middle__text__form__entry__input"
                />
                <div className="contact__us__pop__up__card__middle__text__form__entry__input__error"></div>
              </label>
              <label className="contact__us__pop__up__card__middle__text__form__entry">
                <textarea
                  name=""
                  placeholder="Message"
                  className="contact__us__pop__up__card__middle__text__form__area"
                />
              </label>
              <div className="contact__us__pop__up__card__middle__text__form__entry__submit">
                <button
                  type="submit"
                  className="contact__us__pop__up__card__middle__text__form__entry__submit__btn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
