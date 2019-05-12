import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 200px;
  width: auto;
  max-width: 500px;
  margin: auto;
  padding: 5px;

  color: #fdf6e3;
  background: #002b36;
  border-radius: 10px;
  border: 0.5px solid #657b83;

  @media (max-width: 500px) {
    border: none;
    border-radius: 10px;
    border-bottom: 0.5px solid #657b83;
    border-top: 0.5px solid #657b83;
  }
`;

export const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Story = styled.a`
  color: #268bd2;
  padding: 5px;
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

export const Loader = styled.div`
  color: white;
  font-size: 20px;
  text-transform: uppercase;
`;
