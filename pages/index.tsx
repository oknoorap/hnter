import React from "react";
import Card from "components/card";
import useHackerNews from "hooks/popular-hn";
import useProductHunt from "hooks/popular-ph";
import Story, { IStory } from "components/story";

export default () => {
  const HNStories = useHackerNews<IStory>();
  const PHStories = useProductHunt<IStory>();

  if (HNStories.error || PHStories.error) {
    return "error";
  }

  if (HNStories.loading || PHStories.loading) {
    return "loading...";
  }

  const data: IStory[] = [
    ...(HNStories.data as IStory),
    ...(PHStories.data as IStory)
  ];

  data.sort((a: IStory, b: IStory) => {
    if (a.source.likesCount < b.source.likesCount) {
      return -1;
    }

    if (a.source.likesCount > b.source.likesCount) {
      return 1;
    }

    return 0;
  });

  return (
    <Card title="Today" padding={false}>
      {data.map((item: IStory) => (
        <Story item={item} key={item.uniqueid} />
      ))}
    </Card>
  );
};
