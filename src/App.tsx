import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { MuiAccordionGroup } from "./components";
import useNodeStore from "./store/store";

function App() {
  const nodes = useNodeStore((state) => state.nodes);
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#f5ebe0", height: "100vh" }}>
        <Typography variant="h4" gutterBottom>
          Nodes
        </Typography>
        <MuiAccordionGroup nodes={nodes} />
      </Box>
    </Container>
  );
}

export default App;
