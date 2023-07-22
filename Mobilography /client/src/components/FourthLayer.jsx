import React from "react";
import { useTranslation } from "react-i18next";
import { product1, product2, product3, product4, product5, product6 } from "../assets/images";

const FourthLayer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col py-6 bg-white justify-center items-center">
      <h1 className="font-verdana xs:text-[24px] lg:text-[32px] py-8">
        {t("fourth-layer")}
      </h1>
      <div className="grid xs:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-28  lg:py-28 xs:py-10  xs:gap-x-8 xs:px-6 lg:px-0 xs:gap-y-14 ">
        <div className=" rounded-[24px] shadow-xl hover-cont xs:w-[150px] xs:h-[150px] lg:w-[290px] lg:h-[290px]">
          <img
            className="image rounded-[24px] object-cover w-[100%] h-[100%]"
            src={product1}
            alt=""
          />
          <div className="xs:text-[12px] meals flex   rounded-b-[24px] shadow-lg py-4 justify-center font-verdana font-bold lg:text-[25px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
            LOTUS KEKS
          </div>
        </div>
        <div className=" rounded-[24px] shadow-xl hover-cont xs:w-[150px] xs:h-[150px] lg:w-[290px] lg:h-[290px]">
          <img
            className="image rounded-[24px] object-cover w-[100%] h-[100%]"
            src={product2}
            alt=""
          />
          <div className="xs:text-[12px] meals flex   rounded-b-[24px] shadow-lg py-4 justify-center font-verdana font-bold lg:text-[25px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
          MEDOVIK DESERT
          </div>
        </div>
        <div className=" rounded-[24px] shadow-xl hover-cont xs:w-[150px] xs:h-[150px] lg:w-[290px] lg:h-[290px]">
          <img
            className="image rounded-[24px] object-cover w-[100%] h-[100%]"
            src={product3}
            alt=""
          />
          <div className="xs:text-[12px] meals flex   rounded-b-[24px] shadow-lg py-4 justify-center font-verdana font-bold lg:text-[25px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
            BAQLAJONLI SALAT
          </div>
        </div>
        <div className=" rounded-[24px] shadow-xl hover-cont xs:w-[150px] xs:h-[150px] lg:w-[290px] lg:h-[290px]">
          <img
            className="image rounded-[24px] object-cover w-[100%] h-[100%]"
            src={product4}
            alt=""
          />
          <div className="xs:text-[12px] meals flex   rounded-b-[24px] shadow-lg py-4 justify-center font-verdana font-bold lg:text-[25px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
          PAHLAVA
          </div>
        </div>
        <div className=" rounded-[24px] shadow-xl hover-cont xs:w-[150px] xs:h-[150px] lg:w-[290px] lg:h-[290px]">
          <img
            className="image rounded-[24px] object-cover w-[100%] h-[100%]"
            src={product5}
            alt=""
          />
          <div className="xs:text-[12px] meals flex   rounded-b-[24px] shadow-lg py-4 justify-center font-verdana font-bold lg:text-[25px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
            PIZZA
          </div>
        </div>
        <div className=" rounded-[24px] shadow-xl hover-cont xs:w-[150px] xs:h-[150px] lg:w-[290px] lg:h-[290px]">
          <img
            className="image rounded-[24px] object-cover w-[100%] h-[100%]"
            src={product6}
            alt=""
          />
          <div className="xs:text-[12px] meals flex   rounded-b-[24px] shadow-lg py-4 justify-center font-verdana font-bold lg:text-[25px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
          EKLER
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FourthLayer;
