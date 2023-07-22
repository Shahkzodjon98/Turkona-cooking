import React from "react";

const Header = React.lazy(() => import("../components/Header"));
const FirstLayer = React.lazy(() => import("../components/FirstLayer"));
const SecondLayer = React.lazy(() => import("../components/SecondLayer"));
const ThirdLayer = React.lazy(() => import("../components/ThirdLayer"));
const FourthLayer = React.lazy(() => import("../components/FourthLayer"));
const FifthLayer = React.lazy(() => import("../components/FifthLayer"));
const SixthLayer = React.lazy(() => import("../components/SixthLayer"));
const Footer = React.lazy(() => import("../components/Footer"));


const Website = () => {
  return (
    <div className="bg-secondary">
      <Header />
      <FirstLayer/>
      <SecondLayer/>
      <ThirdLayer/>
      <FourthLayer/>
      <FifthLayer/>
      <SixthLayer/>
      <Footer/>
    </div>
  );
};

export default Website;
