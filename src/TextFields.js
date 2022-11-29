import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";

const CustomTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    //overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#FF0000" : "#FF0000",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow"
    ]),
    "&:hover": {
      backgroundColor: "transparent"
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  }
}));

export default function TextFields() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  return (
        <CustomTextField
          id="outlined-multiline-flexible"
          label="Some"
          multiline
          fullWidth={true}
          minRows={3}
          maxRows={7}
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "red"
            }
          }}
          style={{
            "& .MuiFilledInput-root": {
              backgroundColor: "red"
            }
          }}
        />
  );
}
