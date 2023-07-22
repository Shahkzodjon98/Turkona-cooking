import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { instagram, tg, tiktok, website, youtube } from "../assets/icons/index";
import { Link } from "react-router-dom";

const Home = ({ scrollPosition }) => {
  return (
    <>
      <div className="flex items-center justify-center max-h-screen h-[900px] pink-bg">
        <div className="xs:absolute lg:relative lg:bottom-0 xs:bottom-5 float-none  flex flex-col gap-7">
          <a
            href="https://youtube.com/@TurkonaAmilova"
            className="flex justify-start px-5 gap-[27px] items-center rounded-[6.8px] text-white font-poppins text-[32px]  w-[300px] h-[55px] bg-[#FF2121]"
          >
            <LazyLoadImage
              className="w-[32px] h-[32px] object-contain"
              src={youtube}
              alt="Image Description"
              effect="blur" // optional: adds a blur effect while loading
              scrollPosition={scrollPosition} // required if you want to track scroll position
            />

            <h1>You Tube</h1>
          </a>
          <a
            href="https://www.instagram.com/turkona_cooking/"
            className="flex justify-start px-5 gap-[27px] items-center rounded-[6.8px] text-white font-poppins text-[32px]  w-[300px] h-[55px] bg-grad   "
          >
            <LazyLoadImage
              className="w-[32px] h-[32px] object-contain"
              src={instagram}
              alt="Image Description"
              effect="blur" // optional: adds a blur effect while loading
              scrollPosition={scrollPosition} // required if you want to track scroll position
            />
            
            <h1>Instagram</h1>
          </a>
          <a
            href="https://www.tiktok.com/@turkonacooking?_t=8dg3gLosz9F&_r=1"
            className="flex justify-start px-5 gap-[27px] items-center rounded-[6.8px] text-white font-poppins text-[32px]  w-[300px] h-[55px] bg-tk   "
          >
            <LazyLoadImage
              className="w-[32px] h-[32px] object-contain"
              src={tiktok}
              alt="Image Description"
              effect="blur" // optional: adds a blur effect while loading
              scrollPosition={scrollPosition} // required if you want to track scroll position
            />
            
            <h1>TikTok</h1>
          </a>
          <a
            href="https://t.me/turkona_cooking"
            className="flex justify-start px-5 gap-[27px] items-center rounded-[6.8px] text-white font-poppins text-[32px]  w-[300px] h-[55px] bg-[#0088CC]   "
          >
            <LazyLoadImage
              className="w-[32px] h-[32px] object-contain"
              src={tg}
              alt="Image Description"
              effect="blur" // optional: adds a blur effect while loading
              scrollPosition={scrollPosition} // required if you want to track scroll position
            />
            <h1>Telegram</h1>
          </a>
          <Link
            to="/website"
            className="flex justify-start px-5 gap-[27px] items-center rounded-[6.8px] text-white font-poppins text-[32px]  w-[300px] h-[55px] bg-[#501f95]"
          >
            <LazyLoadImage
              className="w-[32px] h-[32px] object-contain"
              src={website}
              alt="Image Description"
              effect="blur" // optional: adds a blur effect while loading
              scrollPosition={scrollPosition} // required if you want to track scroll position
            />
            <h1>Website</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default trackWindowScroll(Home);
