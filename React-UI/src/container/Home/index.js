import React, { useState } from "react";
import Modal from "react-modal";
import { dummyData } from "../../utils/dummydata";
import AddForm from "../../component/addform";
import EditForm from "../../component/editform";
import InvoiceTable from "../../component/Table";

import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import '../Home/index.css';

const Home = () => {
  const [modalStatus, setModalStatus] = useState(false); // react hooks
  const [editModalStatus, setEditModalStatus] = useState(false); // react hooks
  const [edit,setEdit]=useState('');
  console.log('edit',edit)
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "50%",
      bottom: "50%",
      marginRight: "-45%",
      transform: "translate(-50%, -50%)",
      height: "450px",
      
    },
  };

  const addBtnHandler = (data) => {
    setModalStatus(true);
  };

  const editBtnHandler = (data) => {
    setEditModalStatus(true);
  };

  return (
    <div>
      <Modal
        isOpen={modalStatus} // true or false
        style={customStyles}
      >
        <AddForm controlModal={setModalStatus} />
      </Modal>

      <Modal
        isOpen={editModalStatus} // true or false
        style={customStyles}
      >
        <EditForm controlModal={setEditModalStatus} edit={edit}/>
      </Modal>


      

      <div className="table-banner-wrapper">
        <div>
        
         
        </div>
        
            <div>
              
              <div className="advancesearch">
                <TextField
                  id="outlined-basic"
                  label="Search Customer Id"
                  variant="outlined"/>
              </div>
            </div>
            <div>
              <div className="icon">
              <ButtonGroup size="large" aria-label="large button group">
                
                <Button key="add" onClick={addBtnHandler}>
                  ADD
                </Button>
                <Button key="edit" onClick={editBtnHandler}>EDIT</Button>
                <Button key="delete">DELETE</Button>
              </ButtonGroup>
              </div>
            </div>
      
        </div>
        {/* table region */}
        <div style={{ paddingLeft: 10, paddingRight: 10 }}>
                
           <InvoiceTable tableData={dummyData}
           setEdit={setEdit} />
           

        </div>
      </div>

      );
};

      export default Home;
