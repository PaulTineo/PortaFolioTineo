import React from "react";

function LogoFacebook(props) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.125 15.0791C28.125 7.83105 22.248 1.9541 15 1.9541C7.75195 1.9541 1.875 7.83105 1.875 15.0791C1.875 21.6299 6.67383 27.0598 12.9492 28.0453V18.8742H9.61582V15.0791H12.9492V12.1875C12.9492 8.89863 14.9092 7.08047 17.9068 7.08047C19.343 7.08047 20.8453 7.33711 20.8453 7.33711V10.5674H19.1895C17.56 10.5674 17.0502 11.5787 17.0502 12.6182V15.0791H20.69L20.1088 18.8742H17.0508V28.0465C23.3262 27.0615 28.125 21.6316 28.125 15.0791Z"
        fill="black"
      />
    </svg>

  );
}

export default LogoFacebook;
