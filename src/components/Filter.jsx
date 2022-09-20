import React from "react";
import * as Global from "../styles";
import { categories, difficultyLevels } from "../data";

const Filter = ({ setSelectedTag }) => {
  return (
    <div>
      <Global.H3>Select a filter</Global.H3>
      <Global.TagsContainer>
        {categories
          ? categories.map((category) => (
              <Global.Tag
                key={category}
                onClick={() => setSelectedTag(category)}
              >
                {category}
              </Global.Tag>
            ))
          : false}
        {difficultyLevels
          ? difficultyLevels.map((level) => (
              <Global.Tag
                primary
                key={level}
                onClick={() => setSelectedTag(level)}
              >
                {level}
              </Global.Tag>
            ))
          : false}
      </Global.TagsContainer>
      <button onClick={() => setSelectedTag(null)}>Reset</button>
    </div>
  );
};

export default Filter;
