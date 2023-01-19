export default function Holidaycountryentry({ svg, text }) {
  return (
    <div className="holiday__country__club__container__bottom__right__entry">
      <div className="holiday__country__club__container__bottom__right__entry__svg">
        {svg}
      </div>
      <div className="holiday__country__club__container__bottom__right__entry__text">
        {text}
      </div>
    </div>
  );
}
