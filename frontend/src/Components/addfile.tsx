import { Paper, Grid, TextField, Button, Stack, Typography, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { fileUpload } from "../Services/service"
import { FileUpload } from "../Tools/ExcelUpload"

export function ADDFile(props:any) {
    const navigate = useNavigate();

    const {setValue}=props
    const [file,setFile]=useState<any>(null);
    const [customer, setCustomer] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCustomer(event.target.value);
        console.log(customer)
    };

    const handleSubmit=async (e:any)=>{
        e.preventDefault()
        // console.log(e.currentTarget.elements.customer.value)
        console.log(customer)
        const data = new FormData();
        data.append('style',e.currentTarget.elements.style.value)
        data.append('customer',customer)
        data.append('season',e.currentTarget.elements.season.value)
        data.append('color',e.currentTarget.elements.color.value)
        data.append('department',e.currentTarget.elements.department.value)
        data.append('file', file);
        
        // data.forEach((value, key) => {
        //     console.log(key+" "+value)
        // })

        const response = await fileUpload(data)
        
        console.log(response)
        alert(response.statusText)

        // await fileUpload(data)
        setValue(0)
    }
    return (
        <div>
            <Grid container alignItems="center" justifyContent="center" >
                <Grid item xs={5} >
                    <Paper style={{ marginTop: 20, padding: 20,minWidth:400 }}>
                        <form  onSubmit={handleSubmit}>
                            <Stack spacing={1} alignItems="center">
                                <FileUpload setFile={setFile}/>
                                <Stack direction="row" alignItems="center">
                                    <Typography style={{ width: 100, textAlign: "left",fontSize:14 }}>FileName</Typography>
                                    <TextField
                                        required
                                        size="small"
                                        id="filename"
                                        variant="outlined"
                                        value={file?file.name:""}
                                        InputProps={{
                                            style: {
                                                fontSize: 14,
                                                padding:0,
                                                margin:0,
                                                width:300
                                            }
                                        }} style={{ marginLeft: 10 }} />
                                </Stack>
                                <Stack direction="row" alignItems="center">
                                    <Typography style={{ width: 100, textAlign: "left",fontSize:14 }}>Style</Typography>
                                    <TextField
                                        required
                                        size="small"
                                        id="style"
                                        variant="outlined"
                                        InputProps={{
                                            style: {
                                                fontSize: 14,
                                                padding:0,
                                                margin:0,
                                                width:300
                                            }
                                        }} style={{ marginLeft: 10 }} />
                                </Stack>
                                <Stack direction="row" alignItems="center">
                                    <Typography style={{ width: 100, textAlign: "left",fontSize:14 }}>Customer</Typography>
                                        {/* <Select
                                            labelId="demo-simple-select-label"
                                            id="customer"
                                            value={customer}
                                            label="Customer"
                                            onChange={handleChange}
                                        >
                                        <MenuItem value={"PVH - Tug"}>PVH - Tug</MenuItem>
                                        <MenuItem value={"PVH - NORTH AMERICA"}>PVH - NORTH AMERICA</MenuItem>
                                        <MenuItem value={"ARITZIA"}>ARITZIA</MenuItem>
                                        </Select> */}
                                        <TextField
                                        required
                                        size="small"
                                        id="style"
                                        variant="outlined"
                                        InputProps={{
                                            style: {
                                                fontSize: 14,
                                                padding:0,
                                                margin:0,
                                                width:300
                                            }
                                        }} style={{ marginLeft: 10 }} />
                                </Stack>
                                <Stack direction="row" alignItems="center">
                                    <Typography style={{ width: 100, textAlign: "left" ,fontSize:14}}>Season</Typography>
                                    <TextField
                                        size="small"
                                        id="season"
                                        variant="outlined"
                                        InputProps={{
                                            style: {
                                                fontSize: 14,
                                                padding:0,
                                                margin:0,
                                                width:300
                                            }
                                        }} style={{ marginLeft: 10 }} />
                                </Stack>
                                <Stack direction="row" alignItems="center">
                                    <Typography style={{ width: 100, textAlign: "left",fontSize:14 }}>Color</Typography>
                                    <TextField
                                        size="small"
                                        id="color"
                                        variant="outlined"
                                        InputProps={{
                                            style: {
                                                fontSize: 14,
                                                padding:0,
                                                margin:0,
                                                width:300
                                            }
                                        }} style={{ marginLeft: 10 }} />
                                </Stack>
                                <Stack direction="row" alignItems="center">
                                    <Typography style={{ width: 100, textAlign: "left",fontSize:14 }}>Department</Typography>
                                    <TextField
                                        size="small"
                                        id="department"
                                        variant="outlined"
                                        InputProps={{
                                            style: {
                                                fontSize: 14,
                                                padding:0,
                                                margin:0,
                                                width:300
                                            }
                                        }} style={{ marginLeft: 10 }} />
                                </Stack>
                                <div style={{ textAlign: "left",width:"100%",}}>
                                    <a href="./"><Button size="small" variant="contained" style={{ marginTop: 20,left:60,float:'left'}} >Back</Button></a>
                                {/* </div>
                                <div style={{ textAlign: "right",width:"100%",}}> */}
                                    <Button type="submit" size="small" variant="contained" style={{ marginTop: 20,marginRight:60,float:'right'}} >Save</Button>
                                </div>
                            </Stack>


                        </form>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}