import React from "react";
import * as Global from "../styles";
import { categories } from "../data";

const Filter = () => {
  return (
    <div>
      <Global.H3>Select a filter</Global.H3>
      {categories
        ? categories.map((category) => (
            <Global.Tag key={category}>{category}</Global.Tag>
          ))
        : false}
    </div>
  );
};

export default Filter;
