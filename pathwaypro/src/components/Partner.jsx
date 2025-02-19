import React from "react";
import partner1 from "../assets/partner-1.png";
import partner2 from "../assets/partner-2.png";
import partner3 from "../assets/partner-3.png";
import partner4 from "../assets/partner-4.png";
import partner5 from "../assets/partner-5.png";

const Partner = () => {
  return (
    <>
      <div className="text-center p-12">
        <h2 className="mainTitle">Partnered Companies</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 items-center justify-center gap-12">
        <img
          className="mx-auto max-w-[8rem] h-[8rem] lg:max-w-[11rem] lg:h-[10rem]"
          src={partner1}
          alt="microsoft"
        />
        <img
          className="mx-auto max-w-[7rem] h-[7rem] lg:max-w-[8rem] lg:h-[8rem]"
          src={partner2}
          alt="google"
        />
        <img
          className="mx-auto max-w-[8rem] h-[8rem] lg:max-w-[9rem] lg:h-[9rem]"
          src={partner3}
          alt="amazon"
        />
        <img
          className="mx-auto max-w-[8rem] h-[8rem] lg:max-w-[9rem] lg:h-[9rem]"
          src={partner4}
          alt="paypal"
        />
        <img
          className="mx-auto max-w-[5rem] h-[5rem] md:max-w-[6rem] md:h-[6rem] lg:max-w-[6rem] lg:h-[6rem]"
          src={partner5}
          alt="apple"
        />
      </div>
    </>
  );
};

export default Partner;
