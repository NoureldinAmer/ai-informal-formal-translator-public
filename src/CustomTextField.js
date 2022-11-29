import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";


const CustomTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #265D97",
    borderRadius: 4,
    backgroundColor: "#132F4C",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow"
    ]),
    "&:hover": {
      backgroundColor: "#173A5E",
      borderColor: "#2166AC"
    },
    "&.Mui-focused": {
      backgroundColor: "#173A5E",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: "#2166AC"
    },
  },
  "& .MuiFormLabel-root": {
    color: "rgb(171,180,189)",
  },
  input: {
    color: "red"
  }
}));

export default function CustomizedInputs(props) {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };


  return (
      <CustomTextField
        label={props.label}
        //value={value}
        multiline
        defaultValue={props.defaultValue}
        fullWidth={true}
        minRows={3}
        maxRows={7}
        placeHolder="something"
        onChange={handleChange}
        id="outlined-multiline-flexible"
        variant="filled"
        style={{ marginTop: 11 }}
        inputProps={{ style: {color: "white", fontSize: '1.2em'}, readOnly: props.readOnly }}
        InputLabelProps={{style: {fontSize: '1.2em'}}}
      />
  );
}

CustomizedInputs.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string
}