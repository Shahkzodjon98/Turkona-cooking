import React from "react";
import { useTranslation } from "react-i18next";
import { turkona } from "../assets/images";


const ThirdLayer = () => {
  const {t} = useTranslation()
  return (
    <div className="font-verdana py-10 lg:px-64  flex lg:flex-row xs:flex-col gap-10 justify-center bg-white items-center xs:px-6">

      <img
        className="lg:w-[355px] w-[100%] "
        src={turkona}
        alt=""
      />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="font-[1000] font-verdana xs:text-[20px] lg:text-[28px] pb-6 tracking-[0.40px]  ">
            {t("third-layer")}
          </p>
          <p className="font-verdana font-normal xs:text-sm lg:text-base">{t("third-layer-2")}
          </p>
          <p className="font-verdana font-normal xs:text-sm lg:text-base">{t("third-layer-3")}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <b className="font-verdana xs:text-[20px] lg:text-[28px] pb-6 tracking-[0.40px]  ">
            {t("third-layer-4")}
          </b>
          <div className="flex flex-col gap-2 lg:text-base xs:text-sm">
            <h1 className="circle">{t("third-layer-5")}</h1>
            <h1 className="circle">{t("third-layer-6")}</h1>
            <h1 className="circle">{t("third-layer-7")}</h1>
            <h1 className="circle">{t("third-layer-8")}</h1>
            <h1 className="circle">{t("third-layer-9")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdLayer;
