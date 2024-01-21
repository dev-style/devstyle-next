"use client";

import { Box } from "@mui/material";
import "./searchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

interface IProducts {
  products: Object[] | null;
}

const SearchBar = ({ Products }: IProducts) => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState(Products);

  const handleInput = () => {
    const element = document.querySelector("#search-bar-container");
    element?.classList.toggle("hide");
    element?.classList.toggle("animate__slide_input");
  };

  const searchProduct = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setInputValue(inputValue);
  };

  const handleSearch = () => {
    if (inputValue) return router.push(`/?q=${inputValue}`);

    if (!inputValue) return router.push("/");
  };

  const handleKeyPress = (e: { key: any }) => {
    if (e.key === "Enter") return handleSearch();
  };

  return (
    <>
      <Box
        className="search-input"
        onClick={() => {
          handleInput();
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <SearchIcon />
      </Box>

      <Box id="search-bar-container" className="hide animate__slide_input ">
        <Box
          className="overlay"
          onClick={() => {
            handleInput();
          }}
        ></Box>
        <Box className="search-bar ">
          <input
            type="text"
            placeholder="Search products"
            onChange={searchProduct}
            onKeyDown={handleKeyPress}
            className="outline-none bg-transparent border-none "
          />

          <button
            onClick={() => handleSearch()}
            className="bg-[#ffffff] h-full w-10  text-[#220f00]"
          >
            <SearchIcon fontSize="small" />
          </button>
        </Box>{" "}
      </Box>
    </>
  );
};

export default SearchBar;
