import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { AnimationOnScroll } from "react-animation-on-scroll";

const SkillsSection = () => {
  return (
    <Box sx={{ marginBottom: "8rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Container>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <Typography variant="h4" gutterBottom>
                My Skills
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
                sx={{ lineHeight: "2.25rem" }}
              >
                From the beginning days of when I first got into software
                development up until now, I’ve learned and gained a solid
                understanding of web development standards, the importance of
                reusability/scalability in large enterprise applications, and
                how user experience means everything.
              </Typography>
            </AnimationOnScroll>
          </Container>
        </Grid>

        <Grid item xs={12} md={6} display="flex" alignItems="center">
          <Container>
            <Box
              display="flex"
              flexWrap="wrap"
              sx={{ justifyContent: { xs: "left", md: "right" } }}
            >
              <Chip
                label="JavaScript ES6+"
                sx={{
                  marginBottom: "0.5rem",
                  marginRight: "0.5rem",
                }}
              />
              <Chip
                label="React"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="TypeScript"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="Git"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="css"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="scss"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="CSS Modules"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="TailwindCSS"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="SQL"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="Postgres"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="CI/CD"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="Docker"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="Vim"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="UI Design"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="Esbuild"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="Vite"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="AWS"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="Ruby"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
              <Chip
                label="Ruby on Rails"
                sx={{ marginBottom: "0.5rem", marginRight: "0.5rem" }}
              />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
