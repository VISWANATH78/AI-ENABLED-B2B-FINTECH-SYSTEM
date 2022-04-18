import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Checkbox from "@mui/material/Checkbox";
import '../Table/index.css';
import axios from "axios";
import '../../App.css'

export default function InvoiceTable({ tableData,setEdit }) {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    console.log('CLICKED')
    axios.get("http://localhost:8080/HRC_FINAL/fetch")
    .then((response) => {
      console.log('done')
      console.log(response.data)
      setData(response.data);
    }).catch((err) => {
      console.log('some');
    })
    // setData(tableData);
  }, [tableData]);

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
   

    return (
      <Box style={{color:"white"}} sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton  style={{color:"white"}}
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
          
        >
          {theme.direction === "rtl" ? <LastPageIcon style={{color:"white"}}/> : <FirstPageIcon style={{color:"white"}} />}
        </IconButton>
        <IconButton style={{color:"white"}}
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight  style={{color:"white"}}/>
          ) : (
            <KeyboardArrowLeft  style={{color:"white"}}/>
          )}
        </IconButton>
        <IconButton style={{color:"white"}}
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft  style={{color:"white"}}/>
          ) : (
            <KeyboardArrowRight  style={{color:"white"}}/>
          )}
        </IconButton>
        <IconButton style={{color:"white"}}
          onClick={handleLastPageButtonClick}
          disabled={false}
         
          aria-label="last page"
          
        >
          {theme.direction === "rt1" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  const handleclick=(e)=>{
    console.log(e.target.value)
    setEdit(e.target.value);
  }
  return (
    <div className="fetch-background">
    <TableContainer  style={{backgroundColor:"rgb(40, 66, 80)", color:"white"}} sx={{ maxHeight: '80vh'}} component={Paper}  >
      <Table  stickyHeader aria-label="custom pagination t able">
       
          <TableHead>
            <TableRow>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>
              <Checkbox  style={{color:"white"}}  onClick={handleclick} />
              </TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)" ,color:"white"}}>Sl No</TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Business Code </TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Customer Number </TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Clear Date </TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Business Year </TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Document Id</TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Posting Date</TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Document Create Date</TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Due Date </TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Invoice Currency</TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Document Type</TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Posting Id</TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Total Open Amount</TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>Baseline Create Date </TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>cust_payment_terms </TableCell>
              <TableCell style={{backgroundColor:"rgb(40, 66, 80)",color:"white"}}>invoice_id </TableCell>
            </TableRow>
          </TableHead>
       
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((data, key) => (
              
              <TableRow>
                <TableCell>
                  <Checkbox  style={{color:"white"}} value={data.invoice_currency.concat(',',data.cust_payment_terms)} onClick={handleclick} />
                </TableCell>
                <TableCell style={{color:"white"}}> {data.sl_no} </TableCell>
                <TableCell style={{color:"white"}}> {data.business_code} </TableCell>
                <TableCell style={{color:"white"}}> {data.cust_number} </TableCell>
                <TableCell style={{color:"white"}}> {data.clear_date} </TableCell>
                <TableCell style={{color:"white"}}> {data.buisness_year} </TableCell>
                <TableCell style={{color:"white"}}> {data.doc_id} </TableCell>
                <TableCell style={{color:"white"}}> {data.posting_date}</TableCell>
                <TableCell style={{color:"white"}}> {data.document_create_date}</TableCell>
                <TableCell style={{color:"white"}}> {data.due_in_date}</TableCell>
                <TableCell style={{color:"white"}}> {data.invoice_currency}</TableCell>
                <TableCell style={{color:"white"}}> {data.document_type}</TableCell>
                <TableCell style={{color:"white"}}> {data.posting_id}</TableCell>
                <TableCell style={{color:"white"}}> {data.total_open_amount}</TableCell>
                <TableCell style={{color:"white"}}> {data.baseline_create_date}</TableCell>
                <TableCell style={{color:"white"}}>{data.cust_payment_terms}</TableCell>
                <TableCell style={{color:"white"}}>{data.invoice_id}</TableCell>
              </TableRow>
              
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>

              <TablePagination
                rowsPerPageOptions={[5, 10]}
                colSpan={14}
                count={data?.length || 0}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />


            </TableRow>

          </TableFooter>
        
      </Table>
      
    </TableContainer>
    </div>
  );
}
