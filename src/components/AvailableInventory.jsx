import { PngAvailableinventory } from "../assets";

export default function AvailableInventory() {
  return (
    <div className="your__dream__cottage__is__here">
      <div className="your__dream__cottage__is__here__container">
        <div className="your__dream__cottage__is__here__container__header">
          <div className="your__dream__cottage__is__here__container__left">
            <div className="your__dream__cottage__is__here__container__left__bg"></div>
            <div className="your__dream__cottage__is__here__container__left__text">
              Your dream cottage is here!
            </div>
          </div>
          <div className="your__dream__cottage__is__here__container__right">
            <div className="your__dream__cottage__is__here__container__right__content">
              Always dreamt of owning a cottage among the captivating views of
              Murree Hills?
            </div>
            <div className="your__dream__cottage__is__here__container__right__content">
              This is your chance of fulfil it with Holiday Country Club Murree.
            </div>
            <div className="your__dream__cottage__is__here__container__right__content">
              <span>Don’t miss the chance!</span>
            </div>
          </div>
        </div>
        <div className="your__dream__cottage__is__here__container__bottom">
          <img src={PngAvailableinventory} alt="availableinventory" />
          <div className="your__dream__cottage__is__here__container__bottom__overlay">
            <div className="your__dream__cottage__is__here__container__bottom__overlay__entry">
              Available Inventory
            </div>
            <div className="your__dream__cottage__is__here__container__bottom__overlay__entry">
              5<span>Marla Plot</span>
            </div>
            <div className="your__dream__cottage__is__here__container__bottom__overlay__entry">
              10<span>Marla Plot</span>
            </div>
            <div className="your__dream__cottage__is__here__container__bottom__overlay__entry">
              1<span>Kanal Plot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
