import React from "react";
import style from "./loader.module.css";
function Loader(props) {
  return (
    <div>
      <svg
        width="80"
        height="85"
        viewBox="0 0 363 372"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M211.034 23.284L305.218 79.0091C322.861 89.4482 333.684 108.426 333.684 128.926V243.074C333.684 263.574 322.861 282.552 305.218 292.991L211.034 348.716C192.819 359.493 170.181 359.493 151.966 348.716L57.7822 292.991C40.1386 282.552 29.3164 263.574 29.3164 243.074V128.926C29.3164 108.426 40.1386 89.4482 57.7821 79.0091L151.966 23.284C170.181 12.507 192.819 12.5069 211.034 23.284Z"
          stroke="#64FFDA"
          strokeWidth="10"
          className="svg-elem-1"
        ></path>
        <path
          d="M186 62.8267L67 102.827L102 141.827L53 257.827L88 293.827L186 62.8267Z"
          fill="#64FFDA"
          className="svg-elem-2"
        ></path>
        <path
          d="M311.027 108.97L189.4 65.2566L171.83 105.905L216.512 124.332L151.647 185.672L194.649 213.163L311.027 108.97Z"
          fill="#64FFDA"
          className="svg-elem-3"
        ></path>
        <path
          d="M274 283.827L144 188.827L129 236.827L193 288.827L274 283.827Z"
          fill="white"
          className="svg-elem-4"
        ></path>
      </svg>
    </div>
  );
}

export default Loader;
