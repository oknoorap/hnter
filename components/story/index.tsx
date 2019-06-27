import React from "react";
import styled from "styled-components";
import HNLogo from "components/svg/hn-logo";
import { MdModeComment as CommentIcon } from "react-icons/md";
import Placeholder from "./placeholder";
import themes from "utils/themes";

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
  border-bottom: 1px solid ${themes.card.borderColor};
  flex: 1;

  &:hover {
    background: ${themes.card.bgHoverColor};
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

const Stats = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CommentCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-sizing: border-box;
  background: ${themes.card.bgColor};
  border: 1px solid ${themes.card.borderColor};
  border-radius: 3px;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${themes.card.bgHoverColor};
  }
`;

const VoteCount = styled.div`
  display: flex;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-left: 10px;
`;

const PlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface IPost {
  item?: IStory;
  placeholder?: boolean;
  total?: number;
}

const Post = ({ item, placeholder = false }: IPost) => {
  if (placeholder) {
    const loaderCount = Array.from({ length: 10 }, (v, k) => k);
    return (
      <>
        {loaderCount.map((_, index: number) => (
          <Placeholder key={index} />
        ))}
      </>
    );
  }

  const { title, description, source, image }: any = item;
  const { targetUrl: url, authorName, commentsCount, likesCount } = source;
  let content = description;
  let logo = null;

  if (source.name === SourceType.HackerNews) {
    logo = <HNLogo />;
    content = `by ${authorName}`;
  } else {
    logo = <img src={image.small} />;
  }

  return (
    <Wrapper href={url} target="_blank">
      <Logo>{logo}</Logo>
      <Container>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Stats>
          <CommentCount>
            <CommentIcon /> {commentsCount}
          </CommentCount>
          <VoteCount>{likesCount} Votes</VoteCount>
        </Stats>
      </Container>
    </Wrapper>
  );
};

export default Post;
