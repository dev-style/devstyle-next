import { Box } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <Box className="bg-red-600 flex justify-center w-full h-[100vh] flex-col  md:flex-row ">
      <Box className=" w-[100%] h-[50%]  bg-yellow-400 md:w-[100%] md:h-[100%] flex items-center justify-center ">
        <Box className="w-[90%] h-[90%]  bg-black ">sfsd</Box>
      </Box>
      <Box className=" w-[100%] h-[50%] bg-green-400  md:w-[100%] md:h-[100%]  flex items-center justify-center">
        <Box className="w-[90%] h-[90%]  bg-black ">sfsd</Box>
      </Box>
    </Box>
  );
}
