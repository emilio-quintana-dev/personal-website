import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SocialMediaBar from "./SocialMediaBar";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "8rem 1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Have an Idea? Let's Build it.
            </Typography>

            <Typography sx={{ lineHeight: "2.25rem" }} gutterBottom>
              Feel free to reach out if you’re in need of a Developer. Whether
              that means you need a website, web app, or you’re looking to fill
              a full-time position. I’m always open to a conversation.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="right"
            sx={{ justifyContent: { xs: "left", md: "right" } }}
          >
            <SocialMediaBar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
