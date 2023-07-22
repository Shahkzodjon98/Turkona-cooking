import React from "react";
import { useTranslation } from "react-i18next";

const FifthLayer = () => {
  const { t } = useTranslation();
  return (
    <div className="pb-28 font-verdana flex flex-col gap-4 justify-center items-center bg-white">
      <h1 className="font-verdana text-[32px] py-8">{t("fifth-layer")}</h1>
      <div className="grid lg:grid-cols-3 lg:px-72 xs:px-6   gap-14 items-center place-items-center">
        <div className="flex flex-col gap-8 rounded-[40px] p-10 shadow-card text-[22px] font-extrabold">
          <h1 className="text-[22px] font-extrabold">MINIMUM</h1>
          <h1 className="text-secondary">$ 30</h1>
          <p className="text-[13px] font-normal">{t("fifth-layer-2")}</p>
          <div className="flex flex-col gap-3 text-[15px] font-normal">
            <h1 className="checkbox">1 {t("fifth-layer-3")}</h1>
            <h1 className="checkbox">30 {t("fifth-layer-4")}</h1>
            <h1 className="checkbox">1 {t("fifth-layer-5")}</h1>
            <h1 className="checkbox">{t("fifth-layer-6")}</h1>
            <a rel="noopener noreferrer" target="_blank"
              className="flex justify-center items-center font-extrabold mt-2 tracking-wide shrink-0 p-3 hover:bg-[#f72585]  border-2 border-[#F72585] text-[#f72585] hover:text-white font-verdana not-italic text-[15px]"
              href="https://t.me/Online_mobilografiya"
            >
              <button type="submit">{t("fifth-layer-6.5")}</button>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8 rounded-[40px] p-10 shadow-card text-[22px] font-extrabold">
          <h1 className="text-[22px] font-extrabold">STANDARD</h1>
          <h1 className="text-secondary">$ 50</h1>
          <p className="text-[13px] font-normal">{t("fifth-layer-2")}</p>
          <div className="flex flex-col gap-3 text-[15px] font-normal">
            <h1 className="checkbox">2 {t("fifth-layer-3")}</h1>
            <h1 className="checkbox">45 {t("fifth-layer-4")}</h1>
            <h1 className="checkbox">2 {t("fifth-layer-5")}</h1>
            <h1 className="checkbox">{t("fifth-layer-6")}</h1>
            <a rel="noopener noreferrer" target="_blank"
              className="flex justify-center items-center font-extrabold mt-2 tracking-wide shrink-0 p-3 hover:bg-[#f72585]  border-2 border-[#F72585] text-[#f72585] hover:text-white font-verdana not-italic text-[15px]"
              href="https://t.me/Online_mobilografiya"
            >
              <button type="submit">{t("fifth-layer-6.5")}</button>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8 rounded-[40px] p-10 shadow-card text-[22px] font-extrabold">
          <h1 className="text-[22px] font-extrabold">PREMIUM</h1>
          <h1 className="text-secondary">$ 100</h1>
          <p className="text-[13px] font-normal">{t("fifth-layer-2")}</p>
          <div className="flex flex-col gap-3 text-[15px] font-normal">
            <h1 className="checkbox">3 {t("fifth-layer-3")}</h1>
            <h1 className="checkbox">60 {t("fifth-layer-4")}</h1>
            <h1 className="checkbox">3 {t("fifth-layer-5")}</h1>
            <h1 className="checkbox">{t("fifth-layer-6")}</h1>
            <a rel="noopener noreferrer" target="_blank"
              className="flex justify-center items-center font-extrabold mt-2 tracking-wide shrink-0 p-3 hover:bg-[#f72585]  border-2 border-[#F72585] text-[#f72585] hover:text-white font-verdana not-italic text-[15px]"
              href="https://t.me/Online_mobilografiya"
            >
              <button type="submit">{t("fifth-layer-6.5")}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthLayer;
