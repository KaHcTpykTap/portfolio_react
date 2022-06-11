import React from "react";
import { useState } from "react";
import { ItemMenuContainer } from "./styles/ItemMenuStyles";

const ItemMenu = ({ item, index }) => {

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const color = "#152664"

  return (
    <ItemMenuContainer
      onMouseEnter={() => setSelectedIndex(index)}
      onMouseLeave={() => setSelectedIndex(-1)}
      selectedIndex={selectedIndex}
      index={index}
      color={color}
    >
      <span className="material-icons-outlined">{item.icon}</span>
      {item.name}
    </ItemMenuContainer>
  );
};

export default ItemMenu;
