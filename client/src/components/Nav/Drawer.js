import React, { useState } from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
import { useSelector } from "react-redux";
import DrawerItem from "./DrawerItem";

const DrawerNav = ({ links, profile }) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {links.map((link) => (
          <DrawerItem item={link} />
        ))}
        {profile}
      </List>
    </Drawer>
  );
};

export default DrawerNav;
