import React, { useState } from "react";
import Img from "./Img";
import Input from "./Input";
import searchIcon from "../assets/search.svg";
import searchIconActive from "../assets/search-focus.svg";

const SearchBar = () => {
  const [isFocus, setFocus] = useState(false);
  const [searchData, setSearchData] = useState("");

  const onFocusHandler = () => {
    setFocus(true);
  };

  const onBlurHandler = () => {
    setFocus(false);
  };

  const onChangeHandler = (e) => {
    setSearchData(e.target.value);
  }

  const currentIcon = isFocus ? searchIconActive : searchIcon;
  return (
    <div className="h-screen bg-black">
      <div
        className="group flex h-[39px] w-[348px] flex-row-reverse items-center gap-[15px] rounded-full border border-transparent bg-searchbar-fill px-4 py-2.5 focus-within:border-twitter-blue"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      >
        <Input
          type="text"
          name="SearchBar"
          placeholder="Search"
          value={searchData}
          onChange={onChangeHandler}
          className="w-full bg-transparent leading-normal text-twitter-neutral-50 placeholder:text-twitter-neutral-600 focus:outline-none"
        />
        <Img imgPath={currentIcon} imgAlt="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
