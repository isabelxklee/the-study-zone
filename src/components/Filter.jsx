import React from "react";
import * as Global from "../styles";
import { FilterContainer } from "./component-styles";

const Filter = ({ selectedTag, setSelectedTag, categories, difficulties }) => (
  <FilterContainer>
    <Global.H3>Select a filter</Global.H3>
    <Global.TagsContainer>
      {categories.map((cat) => (
        <Global.Tag
          $clickable
          $opacity={selectedTag === cat.name || selectedTag === null}
          key={cat.id}
          onClick={() => setSelectedTag(cat.name)}
        >
          {cat.name}
        </Global.Tag>
      ))}

      {difficulties.map((diff) => (
        <Global.Tag
          $clickable
          $primary
          $opacity={selectedTag === diff.name || selectedTag === null}
          key={diff.id}
          onClick={() => setSelectedTag(diff.name)}
        >
          {diff.name}
        </Global.Tag>
      ))}
    </Global.TagsContainer>
    <button onClick={() => setSelectedTag(null)}>Reset</button>
  </FilterContainer>
);

export default Filter;
