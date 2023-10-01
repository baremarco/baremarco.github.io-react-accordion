import { MainPage, MuiAccordionGroup } from "./components";
import useNodeStore from "./store/store";

function App() {
  const nodes = useNodeStore((store) => store.nodes);
  return (
    <MainPage title="Nodes">
      <MuiAccordionGroup nodes={nodes} />
    </MainPage>
  );
}

export default App;
