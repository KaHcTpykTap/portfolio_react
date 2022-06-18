import styled from "styled-components";

export const ButtonLoginContainer = styled.div`
  width: min-content;
  padding: 10px 20px;
  height: 48px;
  border: 1px solid #152664;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  color: #152664;

  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .bl-text {
    font-weight: bold;
    font-size: 20px;
    width: max-content;
  }

  // for the test
  margin: 20px;

  .material-icons-outlined {
    font-size: 36px;
  }

  .bl-icon {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: #152664;
    color: #ffffff;
    transform: scale(1.1);
  }

  &:active {
    color: #152664;
    background-color: #ffffff;
    transform: scale(1);
  }
`;
