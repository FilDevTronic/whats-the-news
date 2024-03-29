import * as React from "react";
import * as S from "./paginator.styled";
import { searchStore } from "../../stores";
import { observer } from "mobx-react";

@observer
export class Paginator extends React.Component {
  render(): JSX.Element {
    const { page, pagesTotal, prevPage, nextPage } = searchStore;
    return (
      <S.PaginatorContainer>
        <S.Button onClick={prevPage} disabled={searchStore.isFetching}>
          Prev
        </S.Button>
        Page {page} of {pagesTotal}
        <S.Button onClick={nextPage} disabled={searchStore.isFetching}>
          Next
        </S.Button>
      </S.PaginatorContainer>
    );
  }
}
