import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import TranslateIcon from "@mui/icons-material/Translate";
import PropTypes from "prop-types";

export default function TranslateButton(props) {
  const [loading, setLoading] = React.useState(false);
  async function handleClick() {
    console.log("clicked in Button Component");
    setLoading(true);
    await props.onClick();
    setLoading(false)
  }


  return (
    <LoadingButton
      onClick={() => handleClick()}
      loading={loading}
      loadingPosition="start"
      startIcon={<TranslateIcon />}
      variant="contained"
      sx={{
        backgroundColor: "#007FFF",
        "&:disabled": {
          backgroundColor: 'rgb(40,53,67)',
          color: 'rgb(105,114,124)'
        }
      }}
    >
      Translate
    </LoadingButton>
  );
}

TranslateButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}