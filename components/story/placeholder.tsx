import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
`;

const ContentLoader = styled.div`
  flex-direction: column;
  flex: 1;
`;

const LogoLoader = styled.div`
  margin-right: 10px;
`;

const CommentLoader = styled.div`
  display: flex;
  div {
    margin-right: 5px;

    &:last-of-type {
      margin: 0;
    }
  }
`;

const pulse = keyframes`
  0% {
      background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
      background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
      background-color: rgba(165, 165, 165, 0.1);
  }
}`;

interface Loader {
  width: string;
  box?: boolean;
}

const Loader = styled.div<Loader>`
  width: ${props => props.width || "100px"};
  height: ${props => (props.box ? props.width || "15px" : "15px")};
  animation: ${pulse} 1s infinite ease-in-out;
  margin-bottom: 5px;
`;

const Placeholder = () => {
  return (
    <Wrapper>
      <LogoLoader>
        <Loader width="60px" box={true} />
      </LogoLoader>
      <ContentLoader>
        <Loader width="100%" />
        <Loader width="100px" />
        <CommentLoader>
          <Loader width="80px" />
          <Loader width="50px" />
        </CommentLoader>
      </ContentLoader>
    </Wrapper>
  );
};

export default Placeholder;
