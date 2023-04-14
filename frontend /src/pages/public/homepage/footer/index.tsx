import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";

const grid1 = [
  { label: "Pricing", link: "" },
  { label: "Mobile Tracking App", link: "" },
  { label: "Checkin App", link: "" },
  { label: "Event Registration Software", link: "" },
  { label: "FAQs", link: "" },
  { label: "Sitemaps", link: "" },
];

export function HomepageFooter() {
  return (
    <>
      <FooterWrapper>
        <div style={{ margin: "10rem 20rem " }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                lineHeight={"3rem"}
                fontSize="1.5rem"
                fontWeight={800}
              >
                Use Event Storm
              </Typography>
              {grid1.map((ea) => {
                return (
                  <Typography lineHeight={"3rem"} fontSize="1rem">
                    {ea.label}
                  </Typography>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                lineHeight={"3rem"}
                fontSize="1.5rem"
                fontWeight={800}
              >
                Use Event Storm
              </Typography>
              {grid1.map((ea) => {
                return (
                  <Typography lineHeight={"3rem"} fontSize="1rem">
                    {ea.label}
                  </Typography>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                lineHeight={"3rem"}
                fontSize="1.5rem"
                fontWeight={800}
              >
                Use Event Storm
              </Typography>
              {grid1.map((ea) => {
                return (
                  <Typography lineHeight={"3rem"} fontSize="1rem">
                    {ea.label}
                  </Typography>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                lineHeight={"3rem"}
                fontSize="1.5rem"
                fontWeight={800}
              >
                Use Event Storm
              </Typography>
              {grid1.map((ea) => {
                return (
                  <Typography lineHeight={"3rem"} fontSize="1rem">
                    {ea.label}
                  </Typography>
                );
              })}
            </Grid>
          </Grid>
          <br />

          <FootNote>
            <span style={{ marginRight: 20 }}>@ 2023 copyright</span>
            <FooterLinks>
              <span>About</span>
              <span>Blog</span>

              <span>Help</span>
              <span>Careers</span>
              <span>Investors</span>
              <span>Security</span>
              <span>Developers</span>
            </FooterLinks>
          </FootNote>
        </div>
      </FooterWrapper>
    </>
  );
}

const FooterWrapper = styled("div")`
  background: black;
  color: white;
  height: 490px;
  margin: auto;
`;

const FootNote = styled("div")`
  margin: "6rem 10rem";
`;

const FooterLinks = styled("span")`
  display: flex;
  margin-top: 3rem;
  justify-content: center;

  > span {
    margin: 0 20px;
  }
`;
