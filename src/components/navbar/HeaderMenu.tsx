import { headerMenuData } from "@/src/constant";
import React from "react";
const HeaderMenu = () => {
  return (
    <section className="bg-[#110328] fixed top-[90px] left-0 w-full h-screen z-[100]">
      <div className="text-center">
        {headerMenuData.map((item) => (
          <div
            key={item.id}
            className="py-[11px] px-[13px] text-[19px] font-semibold mb-[10px]"
          >
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeaderMenu;
