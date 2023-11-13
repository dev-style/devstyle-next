import React from "react";
import { Box, Typography, Button } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Metadata } from "next";

import AmbassadorsListing from "./ambassadorsListing";

import "./styles.scss";
// import { analyticsEventTracker } from "../app";
const ScrollToTop = dynamic(() => import("@/app/(client)/lib/scrollToTop"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "_DevStyle Ambassadors ",
  description:
    "Deviens Ambassadeur et représente avec enthousiasme et passion notre Brand🏆 --- #WeLoveDevStyle",
};

const Ambassador = () => {
  return (
    <Box className="ambassador-wrapper">
      <ScrollToTop />
      <Box
        className="ambassador-hero-section-wrapper"
        style={{
          background:
            "linear-gradient(147.14deg, #3E7BFA 6.95%, #6600CC 93.05%)",
          overflow: "hidden",
        }}
        padding={10}
      >
        <Box className="ambassador-hero-section-container">
          <Box>
            <Typography className="text animate__animated animate__flipInX animate__delay__1s">
              NOS AMBASSADEURS
            </Typography>
            <Typography className="subtext animate__animated animate__fadeInUp animate_delay-5s animate__slower">
              Ils représentent avec enthousiasme notre <b>Brand🏆</b>
            </Typography>
          </Box>
          <Box className="image-container">
            <Image
              src={"/assets/images/ambassador.png"}
              alt="ambassador hero"
              className="animate__animated animate__fadeInBottomRight animate__delay-1s"
              width={400}
              height={300}
            />
          </Box>
        </Box>
      </Box>
      <AmbassadorsListing />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Typography>
          Rejoins le programme <b>DSA</b>
        </Typography>
        <a
          href="https://bit.ly/devstyle_ambassador"
          target={"_blank"}
          style={{ textDecoration: "none" }}
          rel="noreferrer"
          //   onClick={() => {
          //     analyticsEventTracker("AMBASSADOR")("become an ambassador");
          //   }}
        >
          <Button className="button">Deviens un _DevStyle Ambassador</Button>
        </a>
      </Box>
    </Box>
  );
};

export default Ambassador;
