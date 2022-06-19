import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { Navbar } from "../components";
import { useTheme } from "@mui/material";

const PageLayout = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container sx={{ marginX: theme.spacing(27) }} maxWidth="xl">
        {children}
      </Container>
    </>
  );
};

export default PageLayout;
