import styled from "styled-components";

export const Loader = styled.div`
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }

  height: 100%;
  opacity: 1;
  position: relative;
  transition: opacity linear 0.1s;

  &::before {
    animation: 1s linear infinite spinner;
    border: solid 3px #657b83;
    border-bottom-color: #dc322f;
    border-radius: 50%;
    content: "";
    height: 40px;
    left: 50%;
    opacity: inherit;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: center;
    width: 40px;
    will-change: transform;
  }
`;
