import React from "react";
import Card from "../../components/Card";

const algos = [
  {
    id: 1,
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    difficulty: "Easy",
    category: "Array",
  },
];

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Study Zone!</h1>
      <p>This is the home page.</p>
      <div>
        {algos.map((algo) => {
          return (
            <Card
              key={algo.id}
              title={algo.title}
              description={algo.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
