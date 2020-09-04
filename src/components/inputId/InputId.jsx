import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import dataAction from "../../actions/dataAction"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box, Typography } from "@material-ui/core";
const InputId = (props) => {
  const dispatch = useDispatch();
  const [dataId, setDateId] = React.useState();
  
  useEffect(() => {
    dispatch(dataAction.getAll(550))
  }, [dispatch]);

  const handleChange = (e) => {
    setDateId(e.target.value)
  }

  const handleSave = () => {
    dispatch(dataAction.getAll(dataId))
  }

  return (
    <div className="App">
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Typography>TPC MOVIE</Typography>
      </Box>

      <Box style={{ display: "flex" }}>
        <TextField
          id="standard-basic"
          onChange={handleChange}
          fullWidth
          label="Digite um ID para pesquisar o filme"
        />
      </Box>
      <Button onClick={handleSave} fullWidth color="Primary">
        Ok
      </Button>
    </div>
  );
};

export default InputId;
