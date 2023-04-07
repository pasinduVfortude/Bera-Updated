import axios from 'axios'
import FileDownload from 'js-file-download'
import { baseUrl } from './baseURL';


export async function fileUpload(data:FormData){
    // console.log(")))))))))))")
    // data.forEach((value, key) => {
    //     console.log(key+" "+value)
    // })
    // console.log(")))))))))))")
    const response = await axios.post(baseUrl +'fileuploader/upload/', data);
    

    return(response)
}

export async function readFileDetails(){
    
    let response=await axios.get(baseUrl +'filedetail/findAll')
    return response
}

export async function getFile(){
    let response=await axios.get(baseUrl +'filedetail/getFile')
    console.log("response",response)
    return response.data
}


export async function downloadFile(filename:string){
    axios({url:baseUrl +"filedetail/downloadPDF/" + filename,
                method:"Get",
                responseType:"blob"})
    .then((res)=>{
        FileDownload(res.data,filename)
    }) 
}

export async function deletePDF(filename:string){
  return  axios({url:baseUrl +"filedetail/deletePDF/" + filename,
                method:"Get",
              })
}

export async function login(user:{username:string,password:string}){
    let response= axios.post(baseUrl +"auth/login",user)
    return response
}

export async function adminLogin(admin:{username:string,password:string}){
    let response = axios.post(baseUrl + "auth/adminLogin", admin)
    return response
}

export async function addUser(data:FormData){
    // data.forEach((value, key) => {
    //     console.log(key+" "+value)
    // })
    const response = await axios.post(baseUrl +'user/create/', data);
    console.log(data)
    return response;
}

export async function getHello(){
    // data.forEach((value, key) => {
    //     console.log(key+" "+value)
    // })
    const response = await axios.get(baseUrl +'user/hello');
    console.log(response)
    return response;
}