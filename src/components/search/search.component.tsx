/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from "react";
import { observer } from "mobx-react";
import { searchStore } from "../../stores";
import * as S from "./search.styled";
import styled from "styled-components";

const Cancel = styled.button`
  display: ${props => (props.disabled ? "none" : "inline")};
  background-color: transparent;
  border: none;
  color: #fdf6e3;
  font-size: 12px;
  padding: 0;
  margin-left: 5px;
`;
@observer
export class Search extends React.Component {
  onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    searchStore.updateQuery(event.currentTarget.value);
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
            placeholder="Search Hacker News stories..."
            onChange={this.onChange}
          />
          <Cancel
            type="button"
            onClick={searchStore.cancel}
            disabled={searchStore.query === ""}
          >
            <S.Icon className="fas fa-window-close" />
          </Cancel>
        </S.InputContainer>
      </S.SearchContainer>
    );
  }
}
