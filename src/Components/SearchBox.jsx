import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

export default function SearchBox() {
  return (
    <>
      <Box id="searchBox">
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} />
      </Box>
    </>
  );
}
