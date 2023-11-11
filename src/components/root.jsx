import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

const Root = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1700);
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          height="100vh"
        >
          <svg
            id="logo"
            width="125"
            height="126"
            viewBox="0 0 389 388"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M165.556 22.4377C183.473 12.12 205.527 12.12 223.444 22.4377L328.886 83.1581C346.863 93.5103 357.942 112.675 357.942 133.42V254.58C357.942 275.325 346.863 294.49 328.886 304.842L223.444 365.562C205.527 375.88 183.473 375.88 165.556 365.562L60.114 304.842C42.1372 294.49 31.0581 275.325 31.0581 254.58V133.42C31.0581 112.675 42.1372 93.5103 60.114 83.1581L165.556 22.4377Z"
              stroke="#64FFDA"
              strokeWidth="8"
            />
            <path d="M203 72.5749L84 112.992L119 152.398L70 269.606L105 305.981L203 72.5749Z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M203.891 71.7442L105.167 306.876L69.412 269.716L118.417 152.495L83.1259 112.76L203.891 71.7442ZM84.8741 113.223L119.583 152.301L70.588 269.496L104.833 305.087L202.109 73.4055L84.8741 113.223Z"
              stroke="#64FFDA"
            />
            <path d="M331.027 119.199L209.4 75.0301L191.83 116.102L236.512 134.721L171.647 196.699L214.649 224.478L331.027 119.199Z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M209.126 74.3987L331.978 119.012L214.7 225.106L170.844 196.776L235.614 134.888L191.172 116.37L209.126 74.3987ZM209.673 75.6616L192.489 115.835L237.411 134.554L172.451 196.623L214.599 223.85L330.075 119.385L209.673 75.6616Z"
              stroke="#64FFDA"
            />
            <path d="M295 298.877L165 202.887L150 251.387L214 303.929L295 298.877Z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M164.73 202.067L296.402 299.29L213.835 304.44L149.423 251.561L164.73 202.067ZM165.27 203.708L150.577 251.214L214.165 303.418L293.598 298.463L165.27 203.708Z"
              stroke="white"
            />
          </svg>
        </Box>
      )}
    </>
  );
};

export default Root;
