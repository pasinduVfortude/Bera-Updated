import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Paper } from '@mui/material';
import { ADDFile } from './addfile';
import { EditFiles } from './editFiles';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { AddUser } from './addusers';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,

  };
}

export function AdminPanel(props: any) {
  const { selectedFile, setSelectedFile, searchkeyword, user } = props
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  

  return (
    <div>

      <div>
        <Box
          sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "whitesmoke" }}
        >
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"

          // sx={{ borderRight: 1, borderColor: 'divider'}}
          >
            <Tab label="Search File" {...a11yProps(0)} />
            <Tab label="Add new file" {...a11yProps(1)} />
            <Tab label="Add new user" {...a11yProps(2)} />

            {/* <Tab label="Edit Details" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        <div style={{ backgroundColor: "#333", height: "80vh" }}>
          <TabPanel value={value} index={0}>
          <a href="./" style={{textDecorationStyle:'unset'}}>
            <Button size="small" variant="contained" style={{marginTop:'1rem',marginBottom:'1rem'}}>Back</Button></a>
            <EditFiles setSelectedFile={setSelectedFile} searchkeyword={searchkeyword} user={user}/>
          </TabPanel>
          <TabPanel value={value} index={1} >
            {
              user ?
                <ADDFile setValue={setValue} />
                : <Typography style={{ color: "white", marginTop: 50 }}>You are not authorized to access this page</Typography>
            }
          </TabPanel>
          <TabPanel value={value} index={2} >
            {
              user ?
                <AddUser setValue2={setValue2} />
                : <Typography style={{ color: "white", marginTop: 50 }}>You are not authorized to access this page</Typography>
            }
          </TabPanel>
          {/* <TabPanel value={value} index={2}>
          Edit details
        </TabPanel> */}
        </div>
      </div>

    </div>
  );
}