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
              <Global.Tag key={category}>
                <button onClick={() => setSelectedTag(category)}>
                  {category}
                </button>
              </Global.Tag>
            ))
          : false}
        {difficultyLevels
          ? difficultyLevels.map((level) => (
              <Global.Tag primary key={level}>
                <button onClick={() => setSelectedTag(level)}>{level}</button>
              </Global.Tag>
            ))
          : false}
      </Global.TagsContainer>
    </div>
  );
};

export default Filter;
