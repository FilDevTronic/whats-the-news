import styled from "styled-components";

export const ResultsContainer = styled.div`
  height: 500px;
  width: auto;
  margin: auto;
  padding: 5px;
  max-width: 500px;
  background-color: white;
  border-radius: 10px;
  border: 0.5px solid grey;

  @media (max-width: 375px) {
    border: none;
    border-radius: 0;
  }

  text-align: center;
`;
