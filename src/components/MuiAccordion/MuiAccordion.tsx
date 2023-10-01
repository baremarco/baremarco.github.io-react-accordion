import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import { IAccordionProps } from "../../types";
import { StatusLabel } from "..";

const NO_DATA = "No data to display!!";

export function MuiAccordion({
  id,
  title,
  subtitle,
  status,
  description,
  expanded,
  onChange
}: IAccordionProps) {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      sx={{ bgcolor: "#edede9" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}a-content`}
        id={`panel${id}a-header`}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "99%" }}
          alignItems="center"
        >
          <Stack>
            <Typography fontWeight="500">{title}</Typography>
            <Typography sx={{ color: "text.secondary" }}>{subtitle}</Typography>
          </Stack>
        </Stack>
        <StatusLabel status={status} />
      </AccordionSummary>
      <AccordionDetails
        sx={{
          bgcolor: "#d6ccc2"
        }}
      >
        <Typography>{description || NO_DATA}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
