import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(255, 110, 0);
  background: linear-gradient(
    180deg,
    rgba(255, 110, 0, 1) 0%,
    rgba(233, 197, 138, 1) 30%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export const StyledControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  max-width: 500px;
  margin: 30px auto;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;
