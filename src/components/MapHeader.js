import React, { useContext } from "react";

import Typography from "@material-ui/core/Typography";
import { DataContext } from "../context/data.context";
import { AttributeContext } from "../context/attribute.context";
import { STATE_NAMES } from "../constants";

function MapHeader({ locationId }) {
  const data = useContext(DataContext);
  const attribute = useContext(AttributeContext);

  if (!data.hasLoaded) {
    return null;
  }
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {STATE_NAMES[locationId]}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {data.data[locationId]["total"][attribute]}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {attribute}
      </Typography>
    </div>
  );
}

export default MapHeader;
