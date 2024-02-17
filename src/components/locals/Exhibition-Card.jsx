import React from "react";

export default function ExhibitionCard({
  prop1,
  prop2,
  prop3,
  prop4,
  className,
}) {
  return (
    <figure
      className={` ${className} md:w-[25rem] w-[12.5rem] h-[243px] rounded-[3.37px] bg-white p-2 flex flex-col items-center roboto overflow-hidden`}
    >
      <div className="flex items-center justify-between w-full pb-[6.76px] font-semibold">
        <p>{prop1}</p>
        <p>{prop2}</p>
      </div>
      <div className="rounded pb-[13.49px]">
        <img
          src={prop3}
          className="object-cover rounded w-[189.64px] h-[157.61px] md:w-[379.28px]"
        />
      </div>
      <div className="text-[10px]">{prop4}</div>
    </figure>
  );
}
