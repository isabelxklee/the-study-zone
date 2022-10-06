import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Filter from "../../components/Filter";
import ScrollToTop from "../../components/ScrollToTop";
import AlgoList from "../../components/AlgoList";
import EmptyState from "../../components/EmptyState";
import Loading from "../../components/Loading";
import { GetEverything } from "../../queries";
import * as Global from "../../styles";

const Home = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const { loading, error, data } = useQuery(GetEverything);

  console.log(error ? `Error: ${error}` : "Nothing to see here!");

  const filteredData = () => {
    return selectedTag === null
      ? data.algorithms
      : data.algorithms.filter(
          (algo) =>
            algo.category.name === selectedTag ||
            algo.difficulty.name === selectedTag
        );
  };

  return (
    <>
      <ScrollToTop />
      <Global.Wrapper>
        <Global.H1>Welcome to the Study Zone!</Global.H1>
        <Global.P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Global.P>

        {loading ? (
          <Loading />
        ) : (
          <>
            <Filter
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              categories={data.categories}
              difficulties={data.difficulties}
            />
            {filteredData().length > 0 ? (
              <AlgoList data={filteredData()} setSelectedTag={setSelectedTag} />
            ) : (
              <EmptyState />
            )}
          </>
        )}
      </Global.Wrapper>
    </>
  );
};

export default Home;
