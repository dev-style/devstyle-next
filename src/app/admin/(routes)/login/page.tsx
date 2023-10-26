"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from "@mui/material";
import Image from "next/image";
import * as React from "react";

export default function Page() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box className=" flex justify-center w-full h-[100vh] flex-col  md:flex-row ">
      <Box className=" w-[100%] h-[50%]  bg-yellow-400 md:w-[100%] md:h-[100%] flex items-center justify-center ">
        <Box className="w-[90%] h-[90%] flex justify-center  flex-col items-center   ">
          <Box className="w-full  h-[70%] flex justify-center items-center">
            <img
              src="/assets/images/hero/hero_image_0.png"
              alt="img"
              className="w-[100%] h-[100%] object-contain "
            />
          </Box>

          <Box className="flex w-full h-[70%] flex-col justify-center items-center ">
            <Typography className="text-white font-bold text-2xl">
              Bienvenue chez Devstyle admin
            </Typography>
            <Typography className="text-white font-normal">
              That is the header
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className=" w-[100%] h-[50%] bg-white  md:w-[100%] md:h-[100%]  flex items-center justify-center">
        <Box className="max-w-[50%] w-full h-[90%]  bg-white flex items-center flex-col justify-center px-4 py-4 ">
          <Typography className="text-gray font-bold text-2xl mt-2 mb-2">
            Bienvenue chez Devstyle admin
          </Typography>
          <Typography className="text-gray font-light mb-10">
            That is the header
          </Typography>

          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl
            sx={{ m: 1, width: "100%", marginTop: "10px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  />
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <button className=" bg-blue-500 text-white rounded-[2px] w-full px-10 py-2  mt-[10px]">
            Connexion
          </button>
        </Box>
      </Box>
    </Box>
  );
}
