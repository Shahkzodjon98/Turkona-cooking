import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { instagram, tg, tiktok, youtube } from "../assets/icons";
import { useTranslation } from "react-i18next";
import { phone, phone1 } from "../assets/images";

const FirstLayer = ({ scrollPosition }) => {
  const { t } = useTranslation();
  return (
    <div className="flex xs:py-[50%] lg:py-0  lg:flex-row xs:flex-col-reverse lg:pt-0 lg:gap-1 text-white lg:ps-16  items-center lg:max-w-screen-lg ">
      <div className="gap-5 lg:flex-col flex before:h-52 before:rounded-lg lg:before:w-1 before:bg-white after:h-52 lg:py-3  after:rounded-lg lg:after:w-1 after:bg-white items-center">
        <a rel="noopener noreferrer" target="_blank"
          className="xs:w-[32px] lg:w-[32px] hover:-translate-y-2 transition-all duration-500 "
          href="https://www.instagram.com/turkona_cooking/"
        >
          <LazyLoadImage
            src={instagram}
            alt="Image Description"
            effect="blur" // optional: adds a blur effect while loading
            scrollPosition={scrollPosition} // required if you want to track scroll position
          />
        </a>
        <a rel="noopener noreferrer" target="_blank"
          className="xs:w-[32px]  lg:w-[32px] object-contain hover:-translate-y-2 transition-all duration-500 "
          href="https://t.me/turkona_cooking"
        >
          <LazyLoadImage
            src={tg}
            alt="Image Description"
            effect="blur" // optional: adds a blur effect while loading
            scrollPosition={scrollPosition} // required if you want to track scroll position
          />
        </a>
        <a rel="noopener noreferrer" target="_blank"
          className="xs:w-[32px]  lg:w-[32px] object-contain hover:-translate-y-2 transition-all duration-500 "
          href="https://www.tiktok.com/@turkonacooking?_t=8dg3gLosz9F&_r=1"
        >
          <LazyLoadImage
            src={tiktok}
            alt="Image Description"
            effect="blur" // optional: adds a blur effect while loading
            scrollPosition={scrollPosition} // required if you want to track scroll position
          />
        </a>
        <a rel="noopener noreferrer" target="_blank"
          className="xs:w-[32px]  lg:w-[32px] object-contain hover:-translate-y-2 transition-all duration-500 "
          href="https://youtube.com/@TurkonaAmilova"
        >
          <LazyLoadImage
            src={youtube}
            alt="Image Description"
            effect="blur" // optional: adds a blur effect while loading
            scrollPosition={scrollPosition} // required if you want to track scroll position
          />
        </a>
      </div>
      <div className="font-vollkorn p-5 lg:px-32 lg:max-w-[700px] flex flex-col gap-16 items-start">
        <div className="flex gap-2">
          <h1 className="font-normal xs:text-3xl lg:text-[45px]  ">Amilova</h1>
          <h1 className="font-normal xs:text-3xl lg:text-[45px]  ">Turkona</h1>
        </div>
        <p className="font-verdana lg:text-xl lg:max-w-screen-lg xs:max-w-screen-xs">
          {t("first-layer")}
        </p>
        
      </div>
      <div className="lg:flex xs:hidden object-contain justify-between items-center ps-28">
        <div className="w-64 ">
          <LazyLoadImage
            src={phone1}
            alt="Image Description"
            effect="blur" // optional: adds a blur effect while loading
            scrollPosition={scrollPosition} // required if you want to track scroll position
          />
        </div>
        <div className="w-[137px] ms-[32.7vh]">
          <LazyLoadImage
            src={phone}
            alt="Image Description"
            effect="blur" // optional: adds a blur effect while loading
            scrollPosition={scrollPosition} // required if you want to track scroll position
          />
        </div>
      </div>
    </div>
  );
};

export default trackWindowScroll(FirstLayer);
