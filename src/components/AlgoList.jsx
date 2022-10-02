import React from "react";
import Card from "./Card";
import { CardsContainer } from "./component-styles";

const AlgoContainer = ({ data, setSelectedTag }) => (
  <CardsContainer>
    {data.map((algo) => (
      <Card key={algo.id} algo={algo} setSelectedTag={setSelectedTag} />
    ))}
  </CardsContainer>
);

export default AlgoContainer;
