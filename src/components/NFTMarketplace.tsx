import Image from "next/image";
import React from "react";

const NFTMarketplace = () => {
  return (
    <div data-aos="fade-up" className="py-[70px] text-center">
      <h2 className="text-[50px] mb-7 tracking-[1px] bg-clip-text text-transparent bg-gradient-to-br from-[#23d3d3] to-[#238ad3] text-center font-bold">
        <span>NFT</span> Marketplace.
      </h2>
      <p>
        Each type of Travel Line package has its own characteristics and profit
        rates.
        <a href="" target="_blank" className="text-[#23d3d3]">
          {" "}
          Open Marketplace.
        </a>
      </p>
      <div className="w-[93%] mx-auto my-6">
        <Image
          src="/images/s1.png"
          alt=""
          width={500}
          height={500}
          className="animate-tilted"
        />
        <Image
          src="/images/s2.png"
          alt=""
          width={500}
          height={500}
          className="animate-tilted"
        />
        <Image
          src="/images/s3.png"
          alt=""
          width={500}
          height={500}
          className="animate-tilted"
        />
        <Image
          src="/images/s4.png"
          alt=""
          width={500}
          height={500}
          className="animate-tilted"
        />
      </div>
    </div>
  );
};

export default NFTMarketplace;
