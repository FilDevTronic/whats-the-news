import * as React from "react";
import { Paginator } from "../../components";
import * as S from "./results.styled";
import * as SH from "../../shared-styles";
import { observer } from "mobx-react";
import { searchStore } from "../../stores";
import * as daysjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";

daysjs.extend(relativeTime);

@observer
export class Results extends React.Component {
  render(): JSX.Element {
    const { hits, isFetching } = searchStore;
    return (
      <div>
        <S.ResultsContainer>
          {isFetching ? (
            <SH.Loader />
          ) : (
            <S.StoryContainer>
              {hits.map(
                (story: HNHit, i: number): JSX.Element => {
                  const date = daysjs(story.created_at as string).fromNow();
                  return (
                    <S.Story key={i}>
                      <S.StoryLink href={`${story.url}`} target="_blank">
                        <div>{story.title}</div>
                        <S.StoryDetails>
                          <S.StoryDetailsText>Posted by </S.StoryDetailsText>
                          <S.StoryAuthor>{story.author}</S.StoryAuthor>{" "}
                          &#47;&#47; ( {date} ) - [ {story.points} point(s) ]
                        </S.StoryDetails>
                      </S.StoryLink>
                    </S.Story>
                  );
                }
              )}
            </S.StoryContainer>
          )}
        </S.ResultsContainer>
        <Paginator />
      </div>
    );
  }
}
