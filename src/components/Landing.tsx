import React from "react";

const Landing = () => {
  return (
    <section className="h-[600px]">
      <div className="pt-[170px] w-[95%] mx-auto">
        <h1 className="text-[47px] leading-[49px] mb-[19px] font-bold">
          Travel Line
        </h1>
        <p className="leading-[27px] py-5 mb-5 font-semibold tracking-[1.2px]">
          The Travel Line project is developed to connect the blockchain and
          travel community to encourage users to travel through the Travel 2
          Earn mechanism.
          <br />
          <br />
          The NFT marketplace gives an opportunity to users to travel and invest
          in tourism through the Metaverse.
        </p>
        <div className="flex items-center font-semibold">
          <button className="bg-[#23d3d3] px-[10px] mr-2 h-[56px] rounded-2xl tracking-[1.2px]">
            Whitepaper
          </button>
          <button className="bg-white text-[#3c3333] px-[10px] mr-[5px] h-[56px] rounded-2xl tracking-[1.2px]">
            Follow on Twitter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
