import Image from "next/image";
import React from "react";

const Metaverse = () => {
  return (
    <div data-aos="fade-up">
      <h2 className="text-[50px] mb-7 tracking-[1px] bg-clip-text text-transparent bg-gradient-to-br from-[#23d3d3] to-[#238ad3] text-center font-bold">
        Metaverse.
      </h2>
      <Image
        src="/images/sec2.png"
        alt=""
        width={1200}
        height={1200}
        className="w-full h-full"
      />
      <div></div>
    </div>
  );
};

export default Metaverse;
