import styled from "styled-components";

export const TestContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100vh;
  .x-cont {
      width: ${props => (props.x/20)}%;
      background-color: blueviolet;
  }
  .y-cont {
      width: ${props => (props.y/20)}%;
      background-color: red;
  }
  .z-cont {
      width: ${props => (props.z/20)}%;
      background-color: green;
  }

  .x-row, .y-row, .z-row {
      display: flex;
      flex-direction: row;
  }


`;
