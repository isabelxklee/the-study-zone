import React from "react";
import Card from "./Card";
import { CardsContainer } from "./component-styles";
import * as Global from "../styles";

const AlgoContainer = ({ data, setSelectedTag }) => (
  <>
    <Global.H2>Algorithms</Global.H2>
    <CardsContainer>
      {data.map((algo) => (
        <Card key={algo.id} algo={algo} setSelectedTag={setSelectedTag} />
      ))}
    </CardsContainer>
  </>
);

export default AlgoContainer;
