import React from "react";
import styled from "styled-components";
import HNLogo from "components/svg/hn-logo";

export interface IStory {
  [Symbol.iterator](): IterableIterator<any>;
  _id: string;
  title: string;
  uniqueid: string;
  description: string;
  source: {
    name: string;
    id: string;
    authorName: string;
    authorUrl: string;
    username: string;
    userId: string;
    sourceUrl: string;
    targetUrl: string;
    commentsCount: number;
    likesCount: number;
    createdAt: string;
    absoluteUrl: string;
    subsources: any[];
    hostnames: {
      sourceUrl: string;
      targetUrl: string;
      absoluteUrl: string;
    };
    displayName: string;
    color: string;
  };
  image: {
    dimensions: {
      small: {
        width: number;
        height: number;
      };
      normal: {
        width: number;
        height: number;
      };
      big: {
        width: number;
        height: number;
      };
    };
    small: string;
    normal: string;
    big: string;
  };
  flags: {
    iframe: {
      checked: boolean;
      supported: boolean;
    };
    promoted: boolean;
  };
}

enum SourceType {
  HackerNews = "hackerNews",
  ProductHunt = "productHunt"
}

const Wrapper = styled.a`
  display: flex;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #e8e8e8;
  flex: 1;

  &:hover {
    background: #f9f9f9;
  }
`;

const Container = styled.div`
  flex-direction: column;
`;

const Logo = styled.div`
  width: 60px;
  height: auto;
  margin-right: 10px;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 5px;
`;

const Content = styled.div``;

interface IPost {
  item: IStory;
}

const Post = ({ item }: IPost) => {
  const { title, description, source, image } = item;
  const { targetUrl: url } = source;
  let content = description;
  let logo = null;

  if (source.name === SourceType.HackerNews) {
    logo = <HNLogo />;
  } else {
    logo = <img src={image.small} />;
  }

  return (
    <Wrapper href={url} target="_blank">
      <Logo>{logo}</Logo>
      <Container>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Container>
    </Wrapper>
  );
};

export default Post;
