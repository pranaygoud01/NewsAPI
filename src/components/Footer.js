import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-center items-center h-[60px] bg-white border-t-black ">
      <div>
        <h1 className="font-bold text-xs">
          Developed by{" "}
          <a
            href="http://pranaygoud01.github.io/portfolio"
            className="underline"
          >
            Pranay
          </a>
        </h1>
      </div>
    </div>
  );
};
