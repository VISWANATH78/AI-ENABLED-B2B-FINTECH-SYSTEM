import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useState } from "react";
import '../../../src/App.css';
import "../editform/index.css";
const EditForm = (props) => {
  const cancelBtnHandler = () => {
    props.controlModal(false);
  };
  const [iccode, seticcode] = useState(props.edit.split(',')[0]);
  const [cptcode, setcptcode] = useState(props.edit.split(',')[1]);


  const handleAddButton = () => {
    console.log(iccode, cptcode)

    axios.put("http://localhost:8080/HRC_FINAL/edit",
      {
        'invoice_currency': iccode,
        'customer_payment_terms': cptcode,
      })
      .then((response) => {
        console.log('done')
        console.log(response.data)
      }).catch((err) => {
        console.log('error');
      })
  }



  return (
    <div style={{ backgroundColor: 'rgb(45, 66, 80)', contant: "center", padding: '15px', margin: '5px' }} >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="align1">
        <TextField className="ic"
          id="outlined-basic"
          label="Invoice Currency"
          variant="outlined"
          size="large"
          value={iccode}
          onChange={e => seticcode(e.target.value)}
        />
        </div>
        <div className="align">
        <TextField className="cp"
          id="outlined-basic"
          label="Customer Payment"
          variant="outlined"
          size="large"
          value={cptcode}
          onChange={e => setcptcode(e.target.value)}
        />
        </div>

        <button style={{ width: '50%', padding: 5, color: "white", backgroundColor: 'rgb(45, 66, 80)' }}
          onClick={handleAddButton}>
          ADD
        </button>
        <button
          style={{ width: "50%", padding: 5, color: "white", backgroundColor: 'rgb(45, 66, 80)' }}
          onClick={cancelBtnHandler}
        >
          CANCEL
        </button>

      </Box>
    </div>
  );
};

export default EditForm;
