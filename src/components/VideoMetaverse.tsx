import Image from "next/image";
import React from "react";

const VideoMetaverse = () => {
  return (
    <section className="h-[710px] bg-red-500 my-[10px] relative w-full bg-videoMetaverse bg-no-repeat bg-cover bg-right">
      <Image
        src="/images/play.svg"
        alt=""
        width={150}
        height={150}
        className="relative text-center"
      />
      <div></div>
    </section>
  );
};

export default VideoMetaverse;
