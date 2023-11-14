import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown({ genrateRandomNumbers, array, heading }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120, fontWeight: "bold" }} size="small">
      <InputLabel id="manage">
        <h5>{heading}</h5>
      </InputLabel>
      <Select labelId="manage" onClick={genrateRandomNumbers} value={""}>
        {array.map((value, index) => (
          <MenuItem key={index} value={`Options${index + 1}`}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
