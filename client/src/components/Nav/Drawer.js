import React, { useState } from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
import { useSelector } from "react-redux";
import DrawerItem from "./DrawerItem";

const DrawerNav = ({ links, profile }) => {
  const [open, setOpen] = useState(false);
  const drawerSize = "200px";
  const marginRight = "10px";
  return (
    <Drawer
      style={{ width: drawerSize, marginRight }}
      variant="permanent"
      anchor="left"
    >
      <List style={{ width: drawerSize }}>
        {links.map((link) => (
          <DrawerItem item={link} />
        ))}
        {profile}
      </List>
    </Drawer>
  );
};

export default DrawerNav;
