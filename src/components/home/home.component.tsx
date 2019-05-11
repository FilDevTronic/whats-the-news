import * as React from "react";
import { StyledHome, StyledControls } from ".";
import { Search, Results, Button, Paginator } from "..";

export const Home = (): JSX.Element => (
  <StyledHome>
    <Search />
    <Results />
    <StyledControls>
      <Button>Prev</Button>
      <Paginator />
      <Button>Next</Button>
    </StyledControls>
  </StyledHome>
);
