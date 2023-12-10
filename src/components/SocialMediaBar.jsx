import Stack from "@mui/material/Stack";

import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialMediaBar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        marginBottom: { xs: "1rem", md: "4rem" },
      }}
    >
      <Link href="https://www.linkedin.com/in/equintanalopez/">
        <LinkedInIcon
          sx={{ color: "#d4d4d4", "&:hover": { color: "#0A66C2" } }}
        />
      </Link>

      <Link href="https://github.com/emilio-quintana-dev">
        <GitHubIcon
          sx={{ color: "#d4d4d4", "&:hover": { color: "#000000" } }}
        />
      </Link>
    </Stack>
  );
};

export default SocialMediaBar;
