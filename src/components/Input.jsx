import React from "react";

const Input = ({
  type,
  placeholder,
  value,
  onChangeHandler,
  style = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      className={
        style ||
        "w-full bg-transparent text-base leading-normal text-twitter-neutral-50 placeholder:text-twitter-neutral-500 focus:outline-none"
      }
      {...rest}
    />
  );
};

export default Input;
