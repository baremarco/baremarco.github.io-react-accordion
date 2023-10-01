import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

interface MainPageProps {
  title: string;
  children: React.ReactNode;
}
export function MainPage({ title, children }: MainPageProps) {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#f5ebe0", height: "100vh" }}>
        <Stack spacing={1}>
          <Typography variant="h4">{title}</Typography>
          {children}
        </Stack>
      </Box>
    </Container>
  );
}
