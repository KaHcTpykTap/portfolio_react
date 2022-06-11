import React from "react";
import { items } from "./data";
import ItemMenu from "./ItemMenu";
import { MenuBarContainer } from "./styles/MenuBarStyles";

const MenuBar = () => {
  return (
    <MenuBarContainer>
      {items.map((item, index) => (
        <ItemMenu key={index} item={item} index={index} />
      ))}
    </MenuBarContainer>
  );
};

export default MenuBar;
