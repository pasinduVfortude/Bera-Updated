import { AppBar, Button, IconButton, Toolbar, Typography,Slider,Stack, Modal, Box, TextField} from "@mui/material";
import {  useNavigate } from "react-router-dom";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import "./App.css"
import { styled, alpha } from '@mui/material/styles';
import { downloadFile, login } from "./Services/service";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";
import JWT from "jwt-decode";

const BootstrapButton = styled(Button)({
  ":disabled": {
    backgroundColor:'#777'
  },
  padding:0,
  height:30,
  marginRight:10,
  marginTop:5,
  width:150,
  fontSize:11

});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  fontSize:12,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius:3,
  boxShadow: 24,
  p: 4,
};


export const Navbar = (props:any) => {
  const navigate = useNavigate();
  const {numPages,setNumPages,pageNumber,setPageNumber,zoomLevel,setZoomLevel,setSearchKeyword,selectedFile,user,setUser}=props
  const [open, setOpen] = useState(false);
  const [errortext,setErrorText]=useState(null)
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDownload=()=>{
    downloadFile(selectedFile)
  }

  function changePage(offset: number) {
    setPageNumber((previous:number) => previous + offset)
  }

  const changePageBack = () => {
    changePage(-1)
  }
  const changePageNext = () => {
    changePage(1)
  }

  const sliderOnChange=(e:any)=>{
    console.log(e.target.value)
    setZoomLevel(e.target.value)
  }

  const handleAdminPanel = () => {
    navigate("/adminpanel")
  };

  const handleSearch = (e:any)=>{
    navigate("/adminpanel")
    setSearchKeyword(e.target.value)
    setPageNumber(1)
    setNumPages(0)
  }

  const handleLogin=()=>{
    handleOpen()
    console.log("login clicked")
  }

  const handleSubmit=async (e:any)=>{
    e.preventDefault()
    console.log(e.currentTarget.elements.username.value,e.currentTarget.elements.password.value)
   let output= login({username:e.currentTarget.elements.username.value,password:e.currentTarget.elements.password.value})
    
   output.then((output:any)=>{
    if (output.status===201){
      console.log(output.data)
      console.log(JWT(output.data.access_token))
      sessionStorage.setItem("token", output.data.access_token);
      setUser(JWT(output.data.access_token))
      setErrorText(null)
      handleClose()
    }

   }).catch((err:any)=>{
    console.log("Error",err)
    setErrorText(err.message)
   
   })
  
  }
  return (
    <AppBar position="static" elevation={0}>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <div>
            <form onSubmit={handleSubmit}>
              <TextField id="username" label="User Name" variant="standard" fullWidth name="username"/>
              <TextField id="password" label="Password" variant="standard" fullWidth name="password" type="password"/>
            
              <Stack direction="row" spacing={2} margin={2} alignItems="center" justifyContent="right">
              <Button type="submit" variant="contained">Login</Button>
              <Button variant="contained" onClick={()=>handleClose()}>Close</Button>
              
          </Stack>
          <Typography  style={{fontSize:11,color:"red"}}>{errortext ? errortext:null}</Typography>
          </form>
          </div>
        </Box>
      </Modal>

      <Toolbar variant="dense" style={{ backgroundColor: "#222" }}>
        <Typography variant="h6" color="inherit" component="div" onClick={()=>navigate("/")}>
          BERA File Viewer
        </Typography>

        <div style={{  textAlign: "center", margin: "auto",width:"300" }}>
          <Stack direction="row">

            <BootstrapButton disabled={pageNumber <= 1} size="small" variant="contained" onClick={changePageBack}>Previous Page</BootstrapButton>
            <span style={{ color: "white",width:100,fontSize:11,alignContent:"center",marginTop:10 }}> Page {pageNumber} of {numPages}</span>
             <BootstrapButton disabled={pageNumber >= numPages} size="small" variant="contained" onClick={changePageNext} style={{ marginLeft: 10 }}>Next Page</BootstrapButton>
           
           
       
          <Slider defaultValue={100} step={25} marks min={25} max={300} onChange={sliderOnChange} value={zoomLevel} style={{maxWidth:100,marginTop:5}} /><span style={{fontSize:11,marginLeft:5,marginTop:10}}> {zoomLevel}%</span>
          <IconButton onClick={handleDownload} color="warning" style={{fontSize:18,marginLeft:50}} disabled={selectedFile===""}> <DownloadForOfflineIcon/></IconButton>
           
          </Stack>
        </div>
        <div
          style={{
            textAlign: "right",
            position: "relative",
            right: 5,
          }}
        >
          <Stack direction="row">
              <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
            />
          </Search>
      
          <IconButton style={{ color: user?"white":"#555",fontSize:11 }} size="small" onClick={handleAdminPanel} disabled={!user}><SettingsIcon/></IconButton>
          <Button style={{ color: "white",fontSize:11 }} size="small" onClick={handleLogin}>
          {user? "Hi " + user.username:"Login"}
          </Button>
          </Stack>
        </div>
      </Toolbar>
    </AppBar>
  );
};


