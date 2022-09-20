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
