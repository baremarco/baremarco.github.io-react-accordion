import { SyntheticEvent, useState } from "react";
import Box from "@mui/material/Box";
import { INodeProps } from "../../types";
import { MuiAccordion } from "..";

interface IAccordionGroupProps {
  nodes: Array<INodeProps>;
}

export function MuiAccordionGroup({ nodes }: IAccordionGroupProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box>
      {nodes.map((node) => {
        return (
          <MuiAccordion
            key={node.id}
            expanded={expanded === node.id}
            onChange={handleChange(node.id)}
            {...node}
          />
        );
      })}
    </Box>
  );
}
