import { PngHomepagebanner } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "swiper/css";

export default function HomepageBanner() {
  const naivgate = useNavigate();
  const [slidesPerView, setSlidesPerView] = useState(6);
  function changeSlidesPerView() {
    if (window.innerWidth < 400) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(1);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  return (
    <div
      className="homepage"
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
      }}
    >
      <Swiper
        slidesPerView={slidesPerView}
        modules={[Autoplay]}
        speed={2000}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="homepage__banner">
            <img
              src={PngHomepagebanner}
              alt="homepagebanner"
              className="homepage__banner__img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homepage__banner">
            <img
              src={PngHomepagebanner}
              alt="homepagebanner"
              className="homepage__banner__img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homepage__banner">
            <img
              src={PngHomepagebanner}
              alt="homepagebanner"
              className="homepage__banner__img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homepage__banner">
            <img
              src={PngHomepagebanner}
              alt="homepagebanner"
              className="homepage__banner__img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
