import styled from "styled-components";

export const ItemMenuContainer = styled.div`
  height: 100%;
  margin: 0 20px;
  width: 100px;
  color: ${(props) =>
    props.selectedIndex === props.index ? props.color : "#FFFFFF"};
  background: ${(props) =>
    props.selectedIndex !== props.index
      ? `linear-gradient(180deg, #3e65f0, #152664)`
      : "#FFFFFF"};

  font-family: "Assistant", sans-serif; // delete font-family
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  .material-icons-outlined {
    margin: 10px;
    font-size: 36px;
    color: ${(props) =>
      props.selectedIndex === props.index ? props.color : "#FFFFFF"};
  }
`;
