import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@mui/material";
import { InboxOutlined, MailOutline } from "@mui/icons-material";

const drawerWidth = 240;

const leftSidebarMenuOptions = ["Option1", "Option2", "Option3", "Option4"];
export const Sidebar = () => {
  return (
    <div>
      <Drawer variant="permanent">
        <div />
        <List>
          {leftSidebarMenuOptions.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
