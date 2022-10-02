import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ScrollToTop from "../../components/ScrollToTop";
import { GlobalStyle } from "../../styles";
import * as Global from "../../styles";

const ShowAlgorithm = ({ algo }) => (
  <>
    <ScrollToTop />
    <Global.Wrapper>
      <GlobalStyle />
      <Global.H1>{algo.name}</Global.H1>
      <Global.P>{algo.description}</Global.P>
      <Global.TagsContainer>
        <Global.Tag $primary $opacity={true}>
          {algo.difficulty.name}
        </Global.Tag>
        <Global.Tag $opacity={true}>{algo.category.name}</Global.Tag>
      </Global.TagsContainer>
      <Global.Spacer>
        <Global.H2>My Solution</Global.H2>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={nightOwl}
                  customStyle={{
                    borderRadius: "8px",
                    margin: "20px 0",
                    background: `${Global.Colors.navy}`,
                  }}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {algo.solution}
        </ReactMarkdown>
      </Global.Spacer>
    </Global.Wrapper>
  </>
);

export default ShowAlgorithm;
