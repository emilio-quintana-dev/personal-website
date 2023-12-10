import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CommonLit from "../assets/commonlit.png";
import Wishtree from "../assets/wishtree.png";

const WorkSection = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ marginBottom: "8rem" }}>
          <Typography variant="h4" gutterBottom>
            My Work
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{ lineHeight: "2.25rem" }}
          >
            I stay pretty active when it comes to extra-curricular projects.
            Whether that means contributing to an open source project, working
            on a passion project, or building a website/web app for a freelance
            client.
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ marginBottom: "8rem" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "2rem" }}
        >
          Full Time Work
        </Typography>

        <img
          src={CommonLit}
          style={{
            width: "100%",
            border: "0.25px solid #eee",
            marginBottom: "1rem",
          }}
        />

        <Typography variant="h5" gutterBottom>
          CommonLit
        </Typography>

        <Typography sx={{ lineHeight: "2.25rem" }} gutterBottom>
          I joined Commonlit in November 2020 as a Jr. Software Engineer. During
          my time there, I learned a lot about fullstack development, specially
          working with Ruby on Rails and React. I also had the opportunity to
          work on some pretty cool projects including an integration with an
          external partner, a migration of our old data model to a new one, and
          also onboarded a new engineer to the team.
        </Typography>
      </Box>

      <Box
        sx={{
          paddingBottom: "8rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "2rem" }}
            >
              Projects
            </Typography>

            <img
              src={Wishtree}
              style={{
                width: "100%",
                border: "0.25px solid #ccc",
                marginBottom: "1rem",
              }}
            />
          </Grid>
        </Grid>

        <Typography variant="h5" gutterBottom>
          Wishtree
        </Typography>

        <Typography sx={{ lineHeight: "2.25rem" }}>
          Wishtree is an app that allows you to create a wish list for any
          occasion. The goal was to allow content-creators to monetize their
          audience. It was built using React and TailwindCSS for the frontend
          and also Postgres and Ruby on Rails for the backend.
        </Typography>
      </Box>
    </Container>
  );
};

export default WorkSection;
