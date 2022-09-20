import React from "react";
import * as Global from "../styles";
import { categories, difficultyLevels } from "../data";

const Filter = ({ selectedTag, setSelectedTag }) => {
  // console.log(selectedTag);

  return (
    <div>
      <Global.H3>Select a filter</Global.H3>
      <Global.TagsContainer>
        {categories
          ? categories.map((category) => (
              <Global.Button
                key={category}
                onClick={() => setSelectedTag(category)}
              >
                {category}
              </Global.Button>
            ))
          : false}
        {difficultyLevels
          ? difficultyLevels.map((level) => (
              <Global.Button
                primary
                key={level}
                onClick={() => setSelectedTag(level)}
              >
                {level}
              </Global.Button>
            ))
          : false}
      </Global.TagsContainer>
      <button onClick={() => setSelectedTag(null)}>Reset</button>
    </div>
  );
};

export default Filter;
