import React from "react";
import Select from "react-dropdown-select";

const Dropdown = ({ options, initial }) => {
 
  return (
    <Select
    multi
    options={options}
    defaultValue = {initial}
    onChange={(values) => this.onChange(values)}
  />
  );
};


export default Dropdown
