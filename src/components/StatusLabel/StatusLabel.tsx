import Typography from "@mui/material/Typography";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import Stack from "@mui/material/Stack";
import { EStatus, TStatus } from "../../types/index.d";

interface IStatusLabelProps {
  status: TStatus;
}
export function StatusLabel({ status }: IStatusLabelProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <CircleRoundedIcon
        sx={{ fontSize: 10 }}
        color={`${status === "on" ? "success" : "error"}`}
      />
      <Typography
        color={`${status === "on" ? "text.primary" : "text.secondary"}`}
      >
        {EStatus[status]}
      </Typography>
    </Stack>
  );
}
