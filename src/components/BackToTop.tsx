import React from "react";

const BackToTop = () => {
  const redirectToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-[15px] right-[15px] z-[100]"
      onClick={redirectToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54.503"
        height="54.503"
        viewBox="0 0 54.503 54.503"
      >
        <g
          id="Group_727"
          data-name="Group 727"
          transform="translate(-38.523 -87.523)"
        >
          <path
            id="bg_12"
            d="M27.251,0A27.251,27.251,0,1,1,0,27.251,27.251,27.251,0,0,1,27.251,0Z"
            transform="translate(38.523 87.523)"
            fill="#23d3d3"
          ></path>
          <path
            id="bg_12-2"
            data-name="bg_12"
            d="M24.774,0A24.774,24.774,0,1,1,0,24.774,24.774,24.774,0,0,1,24.774,0Z"
            transform="translate(41 90)"
            fill="#12062b"
          ></path>
          <path
            id="Icon_ionic-ios-arrow-back"
            data-name="Icon ionic-ios-arrow-back"
            d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z"
            transform="translate(83.813 96.749) rotate(90)"
            fill="#23d3d3"
            stroke="#12062b"
            stroke-width="1"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default BackToTop;
