import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { isLoggedInTrue } from "../../../redux/app/reducer";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export function HomepageHeader() {
  const { isLoggedIn, setAppUser } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const headerOptions = [
    "Signup",
    "Signin",
    "Logout",
    "Create an Event",
    "Help",
    "Contact US",
  ];

  const navigate = useNavigate();
  function redirectFn(event: number) {
    switch (event) {
      case 0:
        navigate("/signup");
        break;
      case 1:
        navigate("/signin");
        break;
      case 2:
        dispatch(isLoggedInTrue(false));
        break;

      case 4:
      case 5:
        navigate("/contact");
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TEAM ABCD
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box sx={{ display: "flex", position: "absolute", right: 0 }}>
            {headerOptions.map((page, index) => {
              if (isLoggedIn) {
                if (index == 0 || index == 1) {
                  return;
                }
              } else {
                if (index == 2) return;
              }
              return (
                <Typography
                  mr={2}
                  ml={2}
                  textAlign="center"
                  style={{ cursor: "pointer" }}
                  onClick={() => redirectFn(index)}
                >
                  {page}
                </Typography>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
