/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";

const NotFoundContent = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        color: "#000",
        fontWeight: "500",
        fontSize: "24px",
      }}
    >
      <img
        src={"/assets/images/404 not found.png"}
        alt="devstyle not found image"
        style={{ width: "25%", maxWidth: "600px", minWidth: "250px" }}
      />
      <p style={{ margin: "10px" }}>This page could not be found.</p>
      <a href="/" style={{ textDecoration: "underline" }}>
        Go to Homepage 👉🏽
      </a>
    </Box>
  );
};

export default NotFoundContent;
