import { Button } from "@mui/material";
import React from "react";
function Loader({ isLoading }) {
  console.log("🚀 ~ file: loader.jsx:4 ~ Loader ~ isLoading", isLoading);
  let classes = "";

  classes += isLoading === false ? "active" : "";
  return (
    <div>
      <svg
        className={classes}
        width="120"
        height="125"
        viewBox="0 0 389 388"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M223.444 22.4377L328.886 83.1581C346.863 93.5103 357.942 112.675 357.942 133.42V254.58C357.942 275.325 346.863 294.49 328.886 304.842L223.444 365.562C205.527 375.88 183.473 375.88 165.556 365.562L60.114 304.842C42.1372 294.49 31.0581 275.325 31.0581 254.58V133.42C31.0581 112.675 42.1372 93.5103 60.114 83.1581L165.556 22.4377C183.473 12.12 205.527 12.12 223.444 22.4377Z"
          stroke="#64FFDA"
          strokeWidth="8"
          class="svg-elem-1"
        ></path>
        <path
          d="M203 72.5748L84 112.992L119 152.398L70 269.606L105 305.981L203 72.5748Z"
          fill="#64FFDA"
          stroke="#64FFDA"
          class="svg-elem-2"
        ></path>
        <path
          d="M331.027 119.199L209.4 75.0301L191.83 116.102L236.512 134.721L171.647 196.699L214.649 224.478L331.027 119.199Z"
          fill="#64FFDA"
          stroke="#64FFDA"
          class="svg-elem-3"
        ></path>
        <path
          d="M295 298.877L165 202.887L150 251.387L214 303.929L295 298.877Z"
          fill="white"
          stroke="white"
          class="svg-elem-4"
        ></path>
      </svg>

      {/* <Button onClick={() => setLoading(!loading)}>draw</Button> */}
    </div>
  );
}

export default Loader;
