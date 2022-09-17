import React from "react";
import Card from "../../components/Card";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Study Zone!</h1>
      <p>This is the home page.</p>
      <div>
        <Card
          title="Algorithm #1"
          description="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order."
        />
      </div>
    </div>
  );
};

export default Home;
