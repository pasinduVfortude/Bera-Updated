import { Paper, Grid, TextField, Button, Stack, Typography, FormGroup, Checkbox, FormControlLabel } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addUser } from "../Services/service";
import CheckboxGroup, { Option } from './CheckboxGroup';

export function AddUser(props:any) {
    const navigate = useNavigate();
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const [accesslevel, setAccesslevel] = useState("0");  
    const [department, setDepartment] = useState<string[]>([]);
    const [fun, setFun] = useState<string[]>([]);


    const options: Option[] = [
        { value: 'PVH - TUG', label: 'PVH - TUG' },
        { value: 'PVH - NORTH AMERICA', label: 'PVH - NORTH AMERICA' },
        { value: 'ARITZIA', label: 'ARITZIA' },
        { value: 'VC&CO - VC', label: 'VC&CO - VC'},
        { value: 'VC&CO - PINK', label: 'VC&CO - PINK'},
        { value: 'LANE BRYANT', label: 'LANE BRYANT'},
        { value: 'OTHER', label: 'OTHER'}
    ];    

    const optionsFunction: Option[] = [
        { value: 'Read', label: 'Read'},
        { value: 'Write', label: 'write'}
    ];

  const handleCheckboxGroupChange = (department: string[]) => {
    setDepartment(department);
    console.log(department)
  };

    const handleSubmit = async(e:any) => {
        e.preventDefault();
        
        // const dep = new Blob(department);
        const dep = department.join(',');
        console.log(dep);
        const data = new FormData();
        data.append('userid', e.currentTarget.elements.email.value);
        data.append('password', e.currentTarget.elements.password.value);
        data.append('department', dep);
        data.append('accesslevel', accesslevel);
        console.log(data)

        const response = await addUser(data)
        console.log(response)
        alert(response.statusText)
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log("handleCheckboxChange triggered")
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
          setDepartment((prevState) => [...prevState, value]);
          console.log(department)
        } else {
        //   setDepartment((prevState) => prevState.filter((v) => v !== value));
        removeDepartment(event)
        }
      };

    const removeDepartment = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // setDepartment([...department.filter((d) => d !== e.target.value)])
        setDepartment((prevState) => prevState.filter((v) => v !== value));
        console.log(value)
    }
    
    const handleCheckboxChangefun = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log("handleCheckboxChange triggered")
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
          setFun((prevState) => [...prevState, value]);
          console.log(fun)
        } else {
        //   setDepartment((prevState) => prevState.filter((v) => v !== value));
        removeFun(event)
        }
      };

    const removeFun = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // setDepartment([...department.filter((d) => d !== e.target.value)])
        setFun((prevState) => prevState.filter((v) => v !== value));
        console.log(value)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Stack direction="row" alignItems="center">
                    <Typography style={{ width: 100, textAlign: "left",fontSize:14, color:'white' }}>User Email</Typography>
                    <TextField
                        size="small"
                        id="email"
                        variant="outlined"
                        InputProps={{
                            style: {
                                fontSize: 14,
                                padding:0,
                                margin:0,
                                width:300,
                                color:"black", 
                                backgroundColor:"white"
                            }
                        }} style={{ marginLeft: 10, }} />
                </Stack>

                <Stack direction="row" alignItems="center">
                    <Typography style={{ width: 100, textAlign: "left",fontSize:14, color:'white' }}>Password</Typography>
                    <TextField
                        size="small"
                        id="password"
                        variant="outlined"
                        InputProps={{
                            style: {
                                fontSize: 14,
                                padding:0,
                                marginTop:10,
                                width:300,
                                color:"black", 
                                backgroundColor:"white"
                            }
                        }} style={{ marginLeft: 10, }} />
                </Stack>

                <Stack direction="row" alignItems="center">
                    <Typography style={{ width: 100, textAlign: "left",fontSize:14, color:'white' }}>Facility ID</Typography>
                    <TextField
                        size="small"
                        id="email"
                        variant="outlined"
                        placeholder="BFF"
                        InputProps={{
                            style: {
                                fontSize: 14,
                                padding:0,
                                margin:0,
                                width:300,
                                color:"black", 
                                marginTop:10,
                                backgroundColor:"white"
                            }
                        }} style={{ marginLeft: 10, }} />
                </Stack>

                <Typography style={{ width: 100, textAlign: "left",fontSize:18, color:'white', marginTop:'20px'}}>Department</Typography>
                <FormGroup style={{color:'white',marginTop:'20px'}}>
                {/* <CheckboxGroup options={options} onChange={handleCheckboxGroupChange} />
                    <span>Select CBU</span> */}
                    {options.map((option) => (
                <FormControlLabel
                key={option.value}
                control={<Checkbox checked={department.includes(option.value)} onChange={handleCheckboxChange} value={option.value} />}
                label={option.label}
                />
                 ))}
                    {/* <FormControlLabel value='PVH - TUG' control={<Checkbox />} onChange={(e:any) => { UpdateDepartment(e) }} label="PVH - TUG" />
                    <FormControlLabel value='PVH - NORTH AMERICA' control={<Checkbox />} onChange={(e:any) => { UpdateDepartment(e) }} label="PVH - NORTH AMERICA" />
                    <FormControlLabel value='ARITZIA' control={<Checkbox />} onChange={(e:any) => { UpdateDepartment(e) }} label="ARITZIA" />
                    <FormControlLabel value='VS&CO - PINK' control={<Checkbox />} onChange={(e:any) => { UpdateDepartment(e) }} label="VS&Co - PINK" />
                    <FormControlLabel value='VS&Co - VS' control={<Checkbox />} onChange={(e:any) => { UpdateDepartment(e) }} label="VS&Co - VS" />
                    <FormControlLabel value='LANE BRYANT' control={<Checkbox />} onChange={(e:any) => { UpdateDepartment(e) }} label="LANE BRYANT" />
                    <FormControlLabel value='OTHER' control={<Checkbox />} onChange={(e:any) => { UpdateDepartment(e) }} label="OTHER" /> */}
                </FormGroup>

                <Typography style={{ width: 100, textAlign: "left",fontSize:18, color:'white', marginTop:'20px'}}>Functions</Typography>
                <FormGroup style={{color:'white',marginTop:'20px'}}>
                {/* <CheckboxGroup options={options} onChange={handleCheckboxGroupChange} />
                    <span>Select CBU</span> */}
                    {optionsFunction.map((option) => (
                <FormControlLabel
                key={option.value}
                control={<Checkbox checked={fun.includes(option.value)} onChange={handleCheckboxChangefun} value={option.value} />}
                label={option.label}
                />
                 ))}
                </FormGroup>

        

                <Button type="submit" size="small" variant="contained" style={{ marginTop: 20,marginRight:60,float:'left'}} >Add</Button>

            </form>
        </div>
    )

}