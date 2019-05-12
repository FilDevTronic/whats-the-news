import * as React from "react";
import { observer } from "mobx-react";
import { searchStore } from "../../stores";
import * as S from "./search.styled";

@observer
export class Search extends React.Component {
  onChange = (event: any): void => {
    searchStore.updateQuery(event.target.value);
    console.log(event.target.value);
  };

  render(): React.ReactNode {
    return (
      <S.SearchContainer>
        <S.Heading>What&apos;s the news?</S.Heading>
        <S.InputContainer>
          <S.Icon className="fas fa-search" />
          <S.Input
            type="text"
            value={searchStore.query}
            placeholder="Search stories on Hacker News"
            onChange={this.onChange}
          />
        </S.InputContainer>
      </S.SearchContainer>
    );
  }
}
