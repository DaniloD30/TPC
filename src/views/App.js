import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dataAction from "../actions/dataAction";

import InputId from "../components/inputId/InputId";
import SimpleTable from "../components/table/Table";
import { Box, Divider } from "@material-ui/core";
const App = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(dataAction.getAll(550));
  }, [dispatch]);

  return (
    <div className="App">
      <Box style={{ marginBottom: "70px" }}>
        <InputId />
      </Box>
      <Divider />
      <Box style={{ marginTop: "70px" }}>
        <SimpleTable data={data} />
      </Box>
    </div>
  );
};

export default App;
