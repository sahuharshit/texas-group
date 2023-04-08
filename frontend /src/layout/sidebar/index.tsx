import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Wrapper } from "../index.style";

const leftSidebarMenuOptions = [
  "All Events",
  "Add New Event",
  "Attendees",
  "Logout",
];
export const Sidebar = () => {
  return (
    <Wrapper>
      <ul>
        {leftSidebarMenuOptions.map((e) => (
          <List>
            <ListItem>
              <ListItemText>
                <span>{e}</span>
                <span>
                  <ListItemIcon />
                </span>
              </ListItemText>
            </ListItem>
          </List>
        ))}
      </ul>
    </Wrapper>
  );
};
