import { useEffect, useState } from "react"
import { readFileDetails } from "../Services/service"
import { CustomTable } from "../Tools/CustomTable"



export const EditFiles=(props:any)=>{
    const {setSelectedFile,searchkeyword,user}=props
    const [headers,setHeaders]=useState([{title:"style",field:"style"},{title:"customer",field:"customer"},{title:"filename",field:"filename"},{title:"season",field:"season"}])
    const [data,setData]=useState([])

    useEffect(()=>{
        const readdata=async ()=>{
            console.log("test")
            const response:any=await readFileDetails()
            if(response.status===200){
                console.log("dataset",response.data)
                setData(response.data)
        
            }
   
        }

        readdata()
    },[])

    const handleRowUpdate=()=>{

    }

    const handleRowAdd=()=>{

    }

    const handleRowDelete=()=>{

    }

    return(
        <div>
            {/* <MaterialTable headers={headers} data={data} setData={setData} handleRowUpdate={handleRowUpdate} handleRowAdd={handleRowAdd} handleRowDelete={handleRowDelete}/> */}
     
            <CustomTable rows={data} setRows={setData} setSelectedFile={setSelectedFile} searchkeyword={searchkeyword} user={user}/>
        </div>
    )
}