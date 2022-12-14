import React from "react";
import * as Global from "../styles";

const Filter = ({ selectedTag, setSelectedTag, categories, difficulties }) => (
  <Global.Spacer>
    <Global.H2>Select a filter</Global.H2>
    <Global.TagsContainer>
      {categories.map((cat) => (
        <Global.Tag
          $clickable
          $opacity={selectedTag === cat.name || selectedTag === null}
          $background={Global.Colors.blue}
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
          $background={Global.Colors.tan}
          key={diff.id}
          onClick={() => setSelectedTag(diff.name)}
        >
          {diff.name}
        </Global.Tag>
      ))}
      <Global.Tag
        $clickable
        $primary
        $opacity={true}
        $background={Global.Colors.navy}
        onClick={() => setSelectedTag(null)}
      >
        Select All
      </Global.Tag>
    </Global.TagsContainer>
  </Global.Spacer>
);

export default Filter;
