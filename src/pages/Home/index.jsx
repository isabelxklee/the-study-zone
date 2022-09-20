import React from "react";
import Card from "../../components/Card";
import { CardsContainer } from "../../components/component-styles";
import Loading from "../../components/Loading";
import * as Global from "../../styles";
import { data } from "../../data";

const Home = () => {
  return (
    <Global.Wrapper>
      <Global.H1>Welcome to the Study Zone!</Global.H1>
      <Global.P>This is the home page.</Global.P>

      {data ? (
        <CardsContainer>
          {data.map((algo) => (
            <Card key={algo.id} algo={algo} />
          ))}
        </CardsContainer>
      ) : (
        <Loading />
      )}
    </Global.Wrapper>
  );
};

export default Home;
