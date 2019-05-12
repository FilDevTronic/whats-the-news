import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10px);
  max-height: 500px;
  min-width: 320px;
  margin: 0px auto;
  color: #fdf6e3;
  background: #002b36;
  border-radius: 10px;
  border: 0.5px solid #657b83;
  box-shadow: inset 0px -30px 45px -50px #93a1a1;

  @media (max-width: 500px) {
    border: none;
    border-radius: 10px;
    border-bottom: 0.5px solid #657b83;
    border-top: 0.5px solid #657b83;
  }

  @media (max-width: 500px) {
    max-height: 400px;
    width: 100vw;
  }
`;

export const StoryContainer = styled.div`
  padding: 5px 0;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Story = styled.div`
  padding: 0 10px 10px;
  margin-bottom: 5px;
  border-bottom: 0.5px solid #586e75;
`;

export const StoryLink = styled.a`
  color: #268bd2;
  text-decoration: none;

  ::selection {
    color: #2aa198;
    background-color: #073642;
  }

  &:hover {
    color: #2aa198;
  }
  transition: color 1s ease;
`;

export const StoryDetails = styled.div`
  display: inline;
  font-size: 12px;
  color: #839496;
`;

export const StoryDetailsText = styled.div`
  display: inline;
  color: #859900;
`;
export const StoryAuthor = styled.div`
  display: inline;
  color: #b58900;
`;
