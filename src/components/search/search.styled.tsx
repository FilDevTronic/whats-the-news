import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  padding-top: 60px;
  margin-bottom: 30px;

  color: white;
  background-color: transparent;
  font-family: "Fira Code", "Source Code Pro", "Helvetica", monospace;

  @media (max-width: 500px) {
    padding-top: 10px;
  }
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  color: #b58900;
`;

export const InputContainer = styled.div`
  min-width: 250px;
  height: 30px;
  padding: 10px 20px;

  font-size: 12px;
  color: #fdf6e3;
  background: #002b36;
  border: 1px solid #657b83;
  border-radius: 50px;
`;

export const Input = styled.input`
  min-width: 210px;
  margin-left: 10px;
  color: #fdf6e3;
  border: none;
  background: #002b36;
  ::selection {
    color: #cb4b16;
    background-color: #073642;
  }

  &:hover {
    color: #2aa198;
  }
  transition: color 1s ease;
`;

export const Icon = styled.i`
  color: #fdf6e3;
  font-size: 12px;
`;
