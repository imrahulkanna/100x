import React from "react";

const Fieldset = ({ type, size = "full", isValid=true, children }) => {
  const borderBlue = "focus-within:border-twitter-blue focus-within:ring-twitter-blue";

  const borderRed = "focus-within:border-red-600 focus-within:ring-red-600";

  const sizeClasses = {
    full: "w-full",
    "1/2": "w-1/2",
    "1/4": "w-1/4",
  };

  const sizeClass = sizeClasses[size];

  const borderColor = isValid ? borderBlue : borderRed;

  const fieldStyle = `group ${sizeClass} pt-2  pb-4 px-3 border border-twitter-neutral-500 rounded-[4px] flex items-center focus-within:outline-none ${borderColor}`;

  const labelStyle = `px-1 text-xs font-medium leading-normal text-twitter-neutral-500 ${
    isValid
      ? "group-focus-within:text-twitter-blue"
      : "group-focus-within:text-red-600"
  }`;

  return (
    <fieldset className={fieldStyle}>
      <legend className={labelStyle}>{type}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
