"use client";

import React, { useState } from "react";
import { Box, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { IPartner } from "@/app/lib/interfaces";

import Spinner from "./spinner";

import "./footer.scss";
// import myAxios from "../utils/axios.config";
// import { analyticsEventTracker } from "../app";

const Footer = () => {
  const [isLoadingPartners, setIsLoadingPartners] = useState(true);
  const [partners, setPartners] = useState<IPartner[]>([]);

  const match900 = useMediaQuery("(max-width:900px)");

  // useEffect(() => {
  //   myAxios
  //     .get("/partner/all")
  //     .then((response) => {
  //       if (response.status === 200) {
  //         setPartners(response.data.message);
  //       } else {
  //         console.log(response.data.message);
  //         setPartners([]);
  //       }
  //     })
  //     .catch((error) => {
  //       toast.error(<div style={{ color: "#fff" }}>{error.message}</div>, {
  //         icon: "🌐",
  //         style: { textAlign: "center" },
  //       });
  //       console.log(error);
  //     })
  //     .finally(() => setIsLoadingPartners(false));
  // }, []);

  return (
    <Box className="footer-wrapper" position={"relative"}>
      <Box paddingX={match900 ? 5 : 10} paddingY={5} zIndex={2}>
        <Grid container className="footer-container">
          <Grid item xs={12} lg={4} height={"100%"} position={"relative"}>
            <Image
              src={"/assets/images/devstyle-white-logo.png"}
              style={{ marginBottom: 40 }}
              alt="devstyle white logo"
              className="devstyle-logo"
              width={170}
              height={50}
            />
          </Grid>
          <Grid container item xs={12} lg={8}>
            <Grid item xs={12} lg={4}>
              <Typography className="footer-title">Nos pages</Typography>
              <Box className="footer-links-wrapper">
                <Link href="/">Accueil</Link>
                <Link
                  href="/#our-collections-section"
                  onClick={() => {
                    try {
                      if (document.querySelector("#our-collections-section")) {
                        document
                          .querySelector("#our-collections-section")
                          ?.scrollIntoView(true);
                      }
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  Shop
                </Link>
                <Link href="/about-us">Qui sommes-Nous ?</Link>
                <Link href="/our-ambassadors">Nos Ambassadeurs</Link>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography className="footer-title">Nos partenaires</Typography>
              {isLoadingPartners ? (
                <Box className="footer-links-wrapper">
                  <Spinner size={25} thickness={3} color={"white"} />
                </Box>
              ) : (
                <Box
                  className="footer-links-wrapper"
                  style={{ flexDirection: "row" }}
                >
                  {partners.map((partner, index) => (
                    <a
                      key={index + "-" + partner.id}
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ margin: "0 15px 15px 0" }}
                    >
                      <Tooltip title={partner.name}>
                        <Box style={{ height: "48px" }}>
                          <Image
                            src={partner.logoWhite.url}
                            alt={partner.name}
                            objectFit="contain"
                            fill={true}
                          />
                        </Box>
                      </Tooltip>
                    </a>
                  ))}
                </Box>
              )}
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography className="footer-title">Suivez nous</Typography>
              <Box className="footer-links-wrapper">
                <Box marginBottom={5} display={"flex"}>
                  <a
                    target="_blank"
                    onClick={() => {
                      // analyticsEventTracker("SOCIAL")("twitter");
                    }}
                    rel="noopener noreferrer"
                    href="https://twitter.com/_devstyle"
                  >
                    <Image
                      src={"/assets/icons/twitter-white.png"}
                      alt="twitter icon"
                      width={20}
                      height={20}
                    />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    target="_blank"
                    onClick={() => {
                      // analyticsEventTracker("SOCIAL")("whatsapp");
                    }}
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send/?phone=237692650993&text=Hello _DevStyle"
                  >
                    <Image
                      src={"/assets/icons/whatsapp-white.png"}
                      alt="whatsapp icon"
                      width={20}
                      height={20}
                    />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    target="_blank"
                    onClick={() => {
                      // analyticsEventTracker("SOCIAL")("facebook");
                    }}
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/devstyl"
                  >
                    <Image
                      src={"/assets/icons/facebook-white.png"}
                      alt="facebook icon"
                      width={20}
                      height={20}
                    />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    target="_blank"
                    onClick={() => {
                      // analyticsEventTracker("SOCIAL")("instagram");
                    }}
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/_devstyle/"
                  >
                    <Image
                      src={"/assets/icons/insta-white.png"}
                      alt="instagram icon"
                      width={20}
                      height={20}
                    />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    target="_blank"
                    onClick={() => {
                      // analyticsEventTracker("SOCIAL")("tiktok");
                    }}
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/@_devstyle"
                  >
                    <Image
                      src={"/assets/icons/tiktok-white.png"}
                      alt="tiktok icon"
                      width={20}
                      height={20}
                    />
                  </a>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  marginTop={1}
                >
                  <Image
                    src={"/assets/icons/phone-white.png"}
                    alt="phone icon"
                    width={20}
                    height={20}
                  />{" "}
                  &nbsp;&nbsp;
                  <Box>
                    <a
                      href="tel:+237692650993"
                      onClick={() => {
                        // analyticsEventTracker("CONTACT")("Orange Number");
                      }}
                    >
                      (+237) 692 650 993
                    </a>
                    <a
                      href="tel:+237654456264"
                      onClick={() => {
                        // analyticsEventTracker("CONTACT")("Mtn Number");
                      }}
                    >
                      {" "}
                      / 654 456 264
                    </a>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  marginTop={1}
                >
                  <Image
                    src={"/assets/icons/email.png"}
                    alt="email icon"
                    width={20}
                    height={20}
                  />{" "}
                  &nbsp;&nbsp;
                  <a
                    href="mailto:contact.devstyle@gmail.com"
                    onClick={() => {
                      // analyticsEventTracker("CONTACT")("Email");
                    }}
                  >
                    contact.devstyle@gmail.com
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className="footer-copyright-text">
        Tous droits réservés © {new Date().getFullYear()}
      </Box>
      <Image
        src={"/assets/images/saly-footer.png"}
        alt="saly footer"
        className="footer-image"
        quality={100}
        width={295}
        height={0}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Footer;
