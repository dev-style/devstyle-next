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
  Typography,
} from "@mui/material";
import Image from "next/image";
import { redirect } from "next/navigation";

import * as Yup from "yup";
import { useFormik } from "formik";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

export default function Page() {
  const [login, { isSuccess, error }] = useLoginMutation();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      await login({ email, password });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      console.log("Tout c'est tres bien passe");

      toast.error(<div style={{ color: "white" }}>success</div>, {
        icon: "🌐",
        style: { textAlign: "center" },
      });

      return redirect("/admin");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        console.log(error);

        toast.error(
          <div style={{ color: "white" }}>{errorData.data.message}</div>,
          {
            icon: "🌐",
            style: { textAlign: "center" },
          }
        );
      }
    }
  }, [isSuccess, error]);

  const [show, setShow] = useState(false);

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <Box className=" flex justify-center w-full h-[100vh] flex-col  md:flex-row ">
      <Box
        style={{
          background: "url('/assets/images/login_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="  w-[100%] h-[50%]   md:w-[100%] md:h-[100%] flex items-center justify-center "
      >
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
              Manage our product
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className=" w-[100%] h-[50%] bg-white  md:w-[100%] md:h-[100%]  flex items-center justify-center">
        <Box className="max-w-[90%] 2xl:max-w-[50%] w-full h-[90%]  bg-white flex items-center flex-col justify-center px-4 py-4 ">
          <LockOpenIcon sx={{ fontSize: "30px", marginBottom: "10px" }} />
          <Typography className="text-gray font-bold text-2xl mt-2 mb-2">
            Bienvenue chez Devstyle admin
          </Typography>
          <Typography className="text-gray font-light mb-10">
            That is the header
          </Typography>

          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <label
                className="text-[16px] font-Poppins text-black dark:text-white"
                htmlFor="email"
              >
                Enter your Email
              </label>
              <input
                type="email"
                name=""
                value={values.email}
                onChange={handleChange}
                id="email"
                placeholder="loginmail@gmail.com"
                className={`${
                  errors.email && touched.email && "border-red-500"
                } w-full text-black dark:text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins `}
              />
              {errors.email && touched.email && (
                <span className="text-red-500 pt-2 block">{errors.email}</span>
              )}
            </div>

            <div className="w-full mt-5 relative mb-1">
              <label
                className="text-[16px] font-Poppins text-black dark:text-white"
                htmlFor="email"
              >
                Enter your password
              </label>
              <input
                type={!show ? "password" : "text"}
                name="password"
                value={values.password}
                onChange={handleChange}
                id="password"
                placeholder="password!@%"
                className={`${
                  errors.password && touched.password && "border-red-500"
                } w-full text-black dark:text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins `}
              />
              {!show ? (
                <AiOutlineEyeInvisible
                  className="absolute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(true)}
                />
              ) : (
                <AiOutlineEye
                  className="absolute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(false)}
                />
              )}
              {errors.password && touched.password && (
                <span className="text-red-500 pt-2 block">
                  {errors.password}
                </span>
              )}
            </div>
            <input
              type="submit"
              value="Login"
              className=" bg-blue-500 text-white rounded-[2px] w-full px-10 py-2  mt-[10px] cursor-pointer"
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
}
