import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import '../addform/index.css';
import { useState } from "react";
import axios from "axios";
import '../../../src/App.css';


const AddForm = (props) => {
  const [bcode, setbcode] = useState();
  const [ccode, setccode] = useState();
  const [cdcode, setcdcode] = useState();
  const [bycode, setbycode] = useState();
  const [dicode, setdicode] = useState();
  const [pdcode, setpdcode] = useState();
  const [dcdcode, setdcdcode] = useState();
  const [ddcode, setddcode] = useState();
  const [iccode, seticcode] = useState();
  const [dtcode, setdtcode] = useState();
  const [picode, setpicode] = useState();
  const [toacode, settoacode] = useState();
  const [bcdcode, setbcdcode] = useState();
  const [cptcode, setcptcode] = useState();
  const [iicode, setiicode] = useState();
  const cancelBtnHandler = () => {
    props.controlModal(false);
  };
  // Handling data from Fields
  const handleAddButton = () => {
    console.log(bcode, ccode, cdcode, bycode, dicode, pdcode, dcdcode, ddcode, iccode, dtcode, picode, toacode, bcdcode, cptcode, iicode)

    axios.post("http://localhost:8080/HRC_FINAL/add",
      {

        'business_code': bcdcode,
        'cust_number': ccode,
        'clear_date': cdcode,
        'buisness_year': bycode,
        'doc_id': dicode,
        'posting_date': pdcode,
        'document_create_date': dcdcode,
        'due_in_date': dicode,
        'invoice_currency': iccode,
        'document_type': dtcode,
        'posting_id': picode,
        'total_open_amount': toacode,
        'baseline_create_date': bcdcode,
        'cust_payment_terms': cptcode,
        'invoice_id': iicode,
      })
      .then((response) => {
        console.log('done')
        console.log(response.data)
      }).catch((err) => {
        console.log('error');
      })
  }

  return (
    <div style={{ backgroundColor: 'rgb(45, 66, 80)', contant:"center",padding: '15px', margin: '5px' }} >
      <Box className="add-box"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "25ch", color: "#21428f" },

        }}
        noValidate

        autoComplete="off"
      >
        <div className="each">
          <TextField
            id="outlined-basic"
            label="Business Code"
            variant="outlined"
            size="small"
            onChange={e => setbcode(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Customer Number"
            variant="outlined"
            size="small"
            onChange={e => setccode(e.target.value)}
          />

          <TextField
            id="date"
            label="Clear Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            onChange={e => setcdcode(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Business Year"
            variant="outlined"
            size="small"
            onChange={e => setbycode(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Document id"
            variant="outlined"
            size="small"
            onChange={e => setdicode(e.target.value)}
          />
          <TextField
            id="date"
            label="Posting Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }
            }
            size="small"
            onChange={e => setpdcode(e.target.value)}
          />
          <TextField
            id="date"
            label="Document Create Date"
            type="date"
            InputLabelProps={{
              shrink: true,

            }}
            size="small"
            onChange={e => setdcdcode(e.target.value)}
          />
          <TextField
            id="date"
            label="Due Date"
            type="date"
            InputLabelProps={{
              shrink: true,

            }}
            size="small"
            onChange={e => setddcode(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Invoice Currency"
            variant="outlined"
            size="small"
            onChange={e => seticcode(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Document Type"
            variant="outlined"
            size="small"
            onChange={e => setdtcode(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Posting Id"
            variant="outlined"
            size="small"
            onChange={e => setpicode(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Total Open Amount"
            variant="outlined"
            size="small"
            onChange={e => settoacode(e.target.value)}
          />

          <TextField
            id="date"
            label="Baseline Create Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            onChange={e => setbcdcode(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Cust Payment Terms"
            variant="outlined"
            size="small"
            onChange={e => setcptcode(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Invoice Id"
            variant="outlined"
            size="small"
            onChange={e => setiicode(e.target.value)}
          />
        </div>
      </Box>


      <button style={{ width: '50%',padding:5,color:"white",backgroundColor:'rgb(45, 66, 80)'}}
        onClick={handleAddButton}>
        ADD
      </button>


      <button
        style={{ width: "50%" ,padding:5,color:"white",backgroundColor:'rgb(45, 66, 80)'}}
        onClick={cancelBtnHandler}
      >
        CANCEL
      </button>
    </div>
  );
};

export default AddForm;
