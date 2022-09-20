import React from "react";
import Card from "../../components/Card";
import { CardsContainer } from "../../components/component-styles";
import Loading from "../../components/Loading";
import * as Global from "../../styles";

const algos = [
  {
    id: 1,
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    difficulty: "Easy",
    category: "Array",
  },
  {
    id: 2,
    title: "Palindrome Pairs",
    description:
      "Given a list of unique words, return all the pairs of the distinct indices (i, j) in the given list, so that the concatenation of the two words words[i] + words[j] is a palindrome.",
    difficulty: "Hard",
    category: "String",
  },
];

const Home = () => {
  return (
    <Global.Wrapper>
      <Global.H1>Welcome to the Study Zone!</Global.H1>
      <Global.P>This is the home page.</Global.P>

      {algos ? (
        <CardsContainer>
          {algos.map((algo) => (
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
