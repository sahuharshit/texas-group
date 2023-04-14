import { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { LoadingButton } from "@mui/lab";

import LoginImage from "./loginImage.png";
import { ErrorMessage, LoginForm, LoginIntro, Wrapper } from "./style";

const Signup = () => {
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleFormChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const {
      target: { name, value },
    } = event;

    setLoginPayload({
      ...loginPayload,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <Grid container alignItems="center">
        <LoginIntro item xs={6} paddingX={6}>
          <div>
            <h2>We invest in businesses, not stocks.</h2>
            <p>
              Our strength is identifying good businesses (Cash flows + Growth)
              that give higher long term returns.
            </p>
            <img src={LoginImage} alt="Login Image" />
          </div>
        </LoginIntro>
        <LoginForm item xs={6}>
          <div>
            <Typography fontWeight={900} fontSize="2rem">
              NorthEastern University
            </Typography>
            <br />
            <form>
              <FormControl fullWidth>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="name"
                  name="fullname"
                  autoComplete="name"
                  value={loginPayload.name}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={loginPayload.email}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="password" className="password-label">
                  Password
                </FormLabel>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={loginPayload.password}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <LoadingButton
                  loading={false}
                  variant="contained"
                  onClick={() => {}}
                  type="submit"
                >
                  Login
                </LoadingButton>
              </FormControl>
            </form>
          </div>
        </LoginForm>
      </Grid>
    </Wrapper>
  );
};

export { Signup };
