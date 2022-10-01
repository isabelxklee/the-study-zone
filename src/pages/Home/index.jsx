import React, { useState } from "react";
import Card from "../../components/Card";
import Filter from "../../components/Filter";
import { CardsContainer, CardElement } from "../../components/component-styles";
import * as Global from "../../styles";

const EmptyState = () => {
  return (
    <CardElement emptyState>
      <Global.H3>Oops, there aren't any algorithms to see here!</Global.H3>
      <Global.P>Please try selecting another filter.</Global.P>
    </CardElement>
  );
};

const Home = ({ algos, categories, difficulties }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  const filteredData = () => {
    return selectedTag === null
      ? algos
      : algos.filter(
          (algo) =>
            algo.category.name === selectedTag ||
            algo.difficulty.name === selectedTag
        );
  };

  return (
    <Global.Wrapper>
      <Global.H1>Welcome to the Study Zone!</Global.H1>
      <Global.P>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Global.P>

      <Filter
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        categories={categories}
        difficulties={difficulties}
      />

      {filteredData().length > 0 ? (
        <CardsContainer>
          {filteredData().map((algo) => (
            <Card key={algo.id} algo={algo} setSelectedTag={setSelectedTag} />
          ))}
        </CardsContainer>
      ) : (
        <EmptyState />
      )}
    </Global.Wrapper>
  );
};

export default Home;
