import React from "react";
import { logo } from "../assets/images";
import { instagram, telefon, tg, tiktok, youtube } from "../assets/icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col lg:px-32">
      <div className="flex lg:flex-row xs:flex-col xs:px-6 xs:gap-10 justify-between items-start py-10">
        <img className="w-40" src={logo} alt="" />
        <div className="flex flex-col lg:gap-10 xs:gap-8 items-center">
          <div className="flex items-center gap-7">
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://www.instagram.com/turkona_cooking/"
            >
              <img
                className="w-8 hover:-translate-y-2 transition-all duration-500 "
                src={instagram}
                alt=""
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/turkona_cooking">
              <img
                className="w-8 hover:-translate-y-2 transition-all duration-500 "
                src={tg}
                alt=""
              />
            </a>
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://www.tiktok.com/@turkonacooking?_t=8dg3gLosz9F&_r=1"
            >
              <img
                className="w-8 hover:-translate-y-2 transition-all duration-500 "
                src={tiktok}
                alt=""
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@TurkonaAmilova">
              <img
                className="w-8 hover:-translate-y-2 transition-all duration-500 "
                src={youtube}
                alt=""
              />
            </a>
          </div>
          <a
            href="tel:+998909355905"
            className="flex gap-2 items-center text-white font-poppins"
          >
            <img src={telefon} className="w-6" alt="" />
            <h1 className="text-[20px]">+998 90 935-59-05</h1>
          </a>
        </div>
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://t.me/Online_mobilografiya"
          className="font-inter lg:w-auto xs:w-[100%] lg:bg-secondary lg:text-white xs:bg-white xs:text-secondary lg:mt-6 p-3 border-2 px-10 hover:bg-white hover:text-secondary"
        >
          {t("first-layer-2")}
        </a>
      </div>
      <div className="before:w-[100%] lg:text-base xs:text-xs xs:px-3 lg:px-0 before:h-[1px] before:bg-white text-white font-poppins before:inline-flex before:mb-4 xs:pb-10 lg:pb-5">
        <div className="flex justify-between">
          <div className="flex lg:gap-8 xs:gap-4">
            <h1>{t("footer")}</h1>
            <h1>{t("footer-1")}</h1>
          </div>
          <a
            target="_blank" rel="noopener noreferrer"
            href="https://uis-team.com"
            className="float-right"
          >
            {t("footer-2")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
