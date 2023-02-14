import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Loader from "./loader";
import Navbar from "./navbar";

const Root = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 1200);
  }, []);
  return (
    <>
      {isLoading === false ? (
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
          <Loader />
        </Box>
      )}
    </>
  );
};

export default Root;
