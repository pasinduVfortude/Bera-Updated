import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deletePDF } from '../Services/service';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { folderURL } from '../Services/folderURL';

// const rows = [
//     { id: 1, season: "SP1", customer: "Nike", style: "Style1", filename: "file1" },
//     { id: 2, season: "SP2", customer: "PVH", style: "Style1", filename: "lsfdjlsdkjf sfj skldjfl sddfkj klj" }
// ];

export function CustomTable(props: any) {
    const navigate = useNavigate();
    const {rows,setRows,setSelectedFile,searchkeyword,user}=props
    const [selectedrow,setSelectedRow]=React.useState<any>(null)

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
      };
      const handleOpen= (row:any) => {
        setSelectedRow(row)
        setOpen(true);
      };

    const handleEdit=(row:any)=>{
        console.log(row)  
    }

    const handleDelete=async ()=>{
        console.log("selectedrow",selectedrow)
        if (selectedrow){
            deletePDF(selectedrow.filename)
            setRows(rows.filter((f:any)=>f.id!==selectedrow.id))
            alert("SuccessFuly Deleted!")
        }
        handleClose()
        
    }

    const handleSelect=(row:any)=>{
        console.log(row)
        setSelectedFile(row.filename)
        console.log(folderURL + row.filename);
        navigate('/');
    }
    return (
        <TableContainer component={Paper}>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete file"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will delete database record and the file too.
            Are you sure you want to delete the file.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow style={{backgroundColor:"#d8f8e1"}}>
                                           
                        <TableCell align='left'>Action</TableCell>
                        <TableCell align="left">Season</TableCell>
                        <TableCell align="left">Customer</TableCell>
                        <TableCell align="left">Style</TableCell>
                        <TableCell align="left">Color</TableCell>
                        <TableCell align="left">Department</TableCell>
                        <TableCell align="left">FileName</TableCell>
                        <TableCell align="left">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {rows.filter((f:any)=>f.style.toUpperCase().includes(searchkeyword.toUpperCase()) || f.customer.toUpperCase().includes(searchkeyword.toUpperCase()) || f.filename.toUpperCase().includes(searchkeyword.toUpperCase())).map((row:any) => ( */}
                    {rows.filter((f:any)=> f.style.toUpperCase().includes(searchkeyword.toUpperCase())).map((row:any) => (

                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                           
                            <TableCell component="th" scope="row" width={220}>
                                <div>
                                    <Button variant="contained" color="info" size="small" onClick={()=>handleSelect(row)}>Select</Button>
                                    {/* <Button size="small" onClick={()=>handleEdit(row)}>Edit</Button>
                                    <Button size="small" onClick={()=>handleDelete(row)}>Delete</Button> */}
                                </div>
                            </TableCell>
                            <TableCell component="th" scope="row" width={120}>
                                {row.season}
                            </TableCell>
                            <TableCell align="left" width={100}>{row.customer}</TableCell>
                            <TableCell align="left" width={120}>{row.style}</TableCell>
                            <TableCell align="left" width={120}>{row.color}</TableCell>
                            <TableCell align="left" width={120}>{row.department}</TableCell>
                            <TableCell align="left">{row.filename}</TableCell>
                            <TableCell component="th" scope="row" width={220}>
                                <div>
                                    <Button variant="contained" size="small" onClick={()=>handleOpen(row)} color="warning" disabled={!user}>Delete</Button>
                                    {/* <Button size="small" onClick={()=>handleEdit(row)}>Edit</Button>
                                    <Button size="small" onClick={()=>handleDelete(row)}>Delete</Button> */}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}