import React from "react";

export default function anydealentry({ svg, heading }) {
  return (
    <div className="anydeal__location__overlay__bottom__container__entry">
      {svg}
      <div className="anydeal__location__overlay__bottom__container__entry__data">
        {heading}
      </div>
    </div>
  );
}
