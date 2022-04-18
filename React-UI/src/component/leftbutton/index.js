import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "../leftbutton/index.css";



function Leftbutton() {
  const [alignment, setAlignment] = useState("predict");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="actions">
      <div className="toggle">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          size="small"
        >
          <ToggleButton value="predict" color="primary">
            PREDICT
          </ToggleButton>
          <ToggleButton value="analytics-view">ANALYTICS VIEW</ToggleButton>
          <ToggleButton value="advance-search">ADVANCE SEARCH</ToggleButton>
        </ToggleButtonGroup>
       
      </div>
      
    </div>
  );
}

export default Leftbutton;
