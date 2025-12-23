import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { appContext } from "../App";
import { Celsius, Fahrenheit } from "../assets/icons";

const LocationData = () => {
  const { localData } = useContext(appContext);
  return (
    <Card variant="outlined" sx={{ maxWidth: 360, height: "100%" }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "red",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ backgroundColor: "blue" }}
          >
            {localData.current.location.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ width: 100, display: "flex", flexDirection: "column" }}
          >
            <div className="p-0 flex justify-center items-center">
              {localData.current.current.feelslike_f}
              <Fahrenheit />
            </div>
            <Divider />
            <div className="p-0 flex justify-center items-center">
            {localData.current.current.feelslike_c}
            <Celsius />
            </div>
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the
          park or just down the hall.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Soft" size="small" />
          <Chip label="Medium" size="small" />
          <Chip label="Hard" size="small" />
        </Stack>
      </Box>
    </Card>
  );
};

export default LocationData;
