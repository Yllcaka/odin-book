import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { NavLink } from "../styles/navStyle";

const DrawerItem = (item) => {
  const { item: itemData } = item;
  const { name, to, exact, icon } = itemData;
  return (
    <NavLink to={to} exact={exact}>
      <ListItem button>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText>{name}</ListItemText>
      </ListItem>
    </NavLink>
  );
};

export default DrawerItem;
