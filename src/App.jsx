import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material";

import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import SocialMediaBar from "./components/SocialMediaBar";
import WorkSection from "./components/WorkSection";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Mulish",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container
        maxWidth="lg"
        sx={{
          marginTop: { xs: "2.5rem", md: "5rem" },
        }}
      >
        <Container>
          <SocialMediaBar />
        </Container>

        <HeroSection />
        <SkillsSection />
        <WorkSection />
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
