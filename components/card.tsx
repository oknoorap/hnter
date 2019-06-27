import React from "react";
import styled from "styled-components";
import themes from "utils/themes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  + .card {
    margin-top: 20px;
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 600;
`;

interface Container {
  hasPadding: boolean;
}

const Container = styled.div<Container>`
  padding: ${props => (props.hasPadding ? "20px" : null)};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background: ${themes.card.bgColor};
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`;

interface Card {
  title: string;
  children: any;
  padding?: boolean;
  className?: string;
}

const Card = ({ title = "", children, padding = true, className }: Card) => {
  return (
    <Wrapper className="card">
      <Title>{title}</Title>
      <Container hasPadding={padding} className={className}>
        {children}
      </Container>
    </Wrapper>
  );
};

export default Card;
