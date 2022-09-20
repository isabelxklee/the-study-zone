import React from "react";
import * as Global from "../styles";
import { categories, difficultyLevels } from "../data";

const Filter = () => {
  return (
    <div>
      <Global.H3>Select a filter</Global.H3>
      <Global.TagsContainer>
        {categories
          ? categories.map((category) => (
              <Global.Tag key={category}>{category}</Global.Tag>
            ))
          : false}
        {difficultyLevels
          ? difficultyLevels.map((level) => (
              <Global.Tag primary key={level}>
                {level}
              </Global.Tag>
            ))
          : false}
      </Global.TagsContainer>
    </div>
  );
};

export default Filter;
