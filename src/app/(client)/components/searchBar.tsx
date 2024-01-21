import { Box } from "@mui/material";
import "./searchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  const handleInput = () => {
    const element = document.querySelector("#search-bar-container");
    element?.classList.toggle("hide");
    element?.classList.toggle("animate__slide_input");
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

      <Box
        id="search-bar-container"
        className="hide animate__slide_input "
     
      >

        <Box className="overlay"    onClick={() => {
          handleInput();
        }}>

        </Box>
        
        <Box className="search-bar ">
          <input
            type="text"
            placeholder="Search products"
            className="outline-none bg-transparent border-none "
          />

          <button
            onClick={() => handleDownNav()}
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
