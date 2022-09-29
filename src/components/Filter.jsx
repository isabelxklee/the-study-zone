import React from "react";
import * as Global from "../styles";
import { difficultyLevels } from "../data";

const Filter = ({ selectedTag, setSelectedTag, categories }) => {
  return (
    <div>
      <Global.H3>Select a filter</Global.H3>
      <Global.TagsContainer>
        {categories.map((cat) => (
          <Global.Tag
            $opacity={selectedTag === cat.name || selectedTag === null}
            key={cat.id}
            onClick={() => setSelectedTag(cat.name)}
          >
            {cat.name}
          </Global.Tag>
        ))}

        {difficultyLevels
          ? difficultyLevels.map((level) => (
              <Global.Tag
                $primary
                $opacity={selectedTag === level || selectedTag === null}
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
