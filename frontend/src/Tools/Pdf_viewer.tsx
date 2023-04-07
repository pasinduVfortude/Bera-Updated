
import { useState } from 'react';
import { Document, Page, } from 'react-pdf/dist/esm/entry.webpack5';
import { Grid, Button, Typography,Paper } from "@mui/material"
import { Stack } from '@mui/system';
import { folderURL } from '../Services/folderURL';
//import { Document, Page } from 'react-pdf';


export const PDF_Viewer = (props:any) => {

const {numPages,setNumPages,pageNumber,setPageNumber,zoomLevel,selectedFile,setSelectedFile}=props
    // const [numPages, setNumPages] = useState(0);
    // const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: any) {
        setNumPages(numPages);
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
    return (
        <Grid container alignItems="center" justifyContent="center" >

            <Grid item style={{ width: "90vw",textAlign:"center" }}>
                <Stack direction="column" alignItems="center" style={{marginRight:5}}>
                   
                    <Paper style={{ border: "1px solid", backgroundColor: "#888", alignItems: "center", padding:5}}>
                        <Document file={folderURL + selectedFile} onLoadSuccess={onDocumentLoadSuccess}>
                            {/* <input type="number" value={pageNumber} onChange={(e) => {setPageNumber(e.target.value)}}/> */}

                            <Page pageNumber={pageNumber} scale={zoomLevel/100}/>
                        </Document>
                    </Paper>
                </Stack>
            </Grid>
        </Grid>
    )
}