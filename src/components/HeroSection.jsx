import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { LazyLoadImage } from "react-lazy-load-image-component";

import ProfileImage from "../assets/profile.jpg";

import "react-lazy-load-image-component/src/effects/blur.css";

const HeroSection = () => {
  return (
    <Box sx={{ marginBottom: "8rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <LazyLoadImage
            alt="Profile Image"
            effect="blur"
            src={ProfileImage} // use normal <img> attributes as props
            width="100%"
            style={{ borderRadius: "0.5rem" }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "left", md: "right" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container>
            <Typography variant="h4" gutterBottom>
              Hi, I'm Emilio.
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
              gutterBottom
            >
              Software Engineer
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{ lineHeight: "2.25rem" }}
            >
              I’m a Full-Stack Software Engineer with 3+ years of experience
              building web applications. I’ve had the pleasure of working
              alongside some incredible engineers, designers and product
              managers. I’m passionate about creating well-done user interfaces
              and reactive Javascript frameworks (React is my jam).
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
