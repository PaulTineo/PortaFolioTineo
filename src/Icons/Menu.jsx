import React from "react";

function Menu({onClick, ...props}) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...props}
    >
      <path
        d="M3.75 22.5H26.25V19.9998H3.75V22.5ZM3.75 16.2498H26.25V13.7502H3.75V16.2498ZM3.75 7.5V10.0002H26.25V7.5H3.75Z"
        fill="black"
      />
    </svg>
  );
}

export default Menu;
