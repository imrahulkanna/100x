import React from "react";

export const SelectItem = ({ value, ...rest }) => {
  return (
    <option value={value} {...rest}>
      {value}
    </option>
  );
};

const Select = ({ name, value, onChangeHandler, children }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChangeHandler}
      className="w-full bg-black focus:outline-none"
    >
      {children}
    </select>
  );
};

export default Select;
