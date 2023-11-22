import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchBox from "./SearchBox";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
export default function Header({genrateRandomNumbers}) {
  return (
    <Paper square id="header">
      <Button style={{backgroundColor:'#8DDFCB'}} onClick={genrateRandomNumbers}>Randomize Data</Button>
      <SearchBox />
      <Badge badgeContent={""} variant="dot" color="success" overlap="circular">
        <NotificationsIcon />
      </Badge>

      <Avatar
        alt="Atul Singh"
        src="https://lh3.googleusercontent.com/a/ACg8ocKeFcbaChQ5cn3ZzErML9RyDMyTBDh7SQo2ayN5lII-qhU=s96-c-rg-br100"
      />
      <IconButton>
        <ArrowDropDownIcon />
      </IconButton>
    </Paper>
  );
}
