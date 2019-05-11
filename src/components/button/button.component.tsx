import * as React from "react";
import { StyledButton } from "./button.styled";

export const Button: React.SFC = ({ children }): JSX.Element => (
  <StyledButton>{children}</StyledButton>
);
