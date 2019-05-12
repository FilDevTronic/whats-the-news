import styled from "styled-components";

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: 20px auto;
  color: #839496;
  font-family: "Fira Code", "Source Code Pro", "Helvetica", monospace;
  font-size: 18px;
`;

export const Button = styled.button`
  color: #859900;
  background: #002b36;
  border: 1px solid #657b83;
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #b58900;
  }
  transition: color 1s ease;

  font-family: "Fira Code", "Source Code Pro", "Helvetica", monospace;
  font-size: 14px;
  text-align: center;
`;
