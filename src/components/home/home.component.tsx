import * as React from "react";
import * as S from "./home.styled";
import * as SH from "../../shared-styles";
import { Search, Results } from "..";
import { searchStore } from "../../stores";
import { observer } from "mobx-react";

@observer
export class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <S.HomeContainer>
        {searchStore.isLoading ? (
          <SH.Loader />
        ) : (
          <>
            <Search />
            <Results />
          </>
        )}
      </S.HomeContainer>
    );
  }
}
