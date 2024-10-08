import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";

export const NavBar = () => {
  const [value, setValue] = useState(false);
  const handleButton = () => {
    setValue(!value);
  };
  const Menu = [
    {
      name: "Portfolio",
      id: "1",
    },
    {
      name: "Developed by Pranay",
      id: "2",
    },
  ];
  return (
    <div className="h-[60px] w-full border-b fixed bg-[rgba(255,255,255,0.65)] flex justify-between items-center ">
      <div className="pl-10">
        <h1 className="font-bold text-xl cursor-pointer">News</h1>
      </div>
      <div className="pr-10 flex flex-row">
        {value ? (
          <div className="mt-[150px] border rounded-xl bg-white transition-all duration-500 opacity-100 transform translate-y-0">
            <ul className="p-5 flex flex-col">
              {Menu.map((obj) => {
                return (
                  <a
                    className="py-2 px-5 hover:underline hover:scale-105 duration-150 cursor-pointer"
                    id={obj.id}
                    href="https://pranaygoud01.github.io/portfolio/"
                  >
                    {obj.name}
                  </a>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="transition-all duration-500 opacity-0 transform translate-y-20"></div>
        )}
        <button
          className="text-3xl transition-all duration-500 opacity-100 transform"
          onClick={handleButton}
        >
          {value ? <MdOutlineCancel /> : <CgMenuGridO />}
        </button>
      </div>
    </div>
  );
};
