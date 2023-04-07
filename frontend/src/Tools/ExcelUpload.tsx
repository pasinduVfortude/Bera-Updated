import React from "react";
import {
  Button,
  Paper,

} from "@mui/material";


// import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// const override = css`
//   display: inline-block;
// `;

export const FileUpload = (props: any) => {
  
  const { setFile } = props;
  const [loading, setLoading] = React.useState(0);
  const [filename, setFileName] = React.useState("")

  const handleFile = async (e: any) => {
    setLoading(1);

    if (e.target.files[0] !== undefined) {
      const data = new FormData();
      // data.append('name', "new name")
      // data.append('file', e.target.files[0]);
      setFile(e.target.files[0])
      // data.append('data',"This is a testname")
      // data.append('id',"This is a id")
      // await axios.post('http://localhost:3000/fileuploader/upload/', data);
      console.log(e.target.files[0])
      setLoading(2);
    }
  };

  const handleUpload = () => {

  }


  return (
    <React.Fragment>
      <form>
        {/* <Paper
          style={{
            margin: 10,
            padding: 10,
            paddingTop: 10,
            width: 250,
            textAlign: "center",
            
          }}
        > */}
        <div style={{
          margin: 10,
          padding: 10,
          paddingTop: 10,
          width: 250,
          textAlign: "center",

        }}>
                 <Button
            size="small"
            variant="contained"
            color="inherit"
            component="label"
            style={{
              display: "inline-block",
              marginBottom: 25,
              marginRight: 10,
              fontSize: 10
            }}
          >
            Upload file
            <input
              type="file"
              onChange={(e) => handleFile(e)}
              accept=".pdf"
              style={{ display: "none", fontSize: 12 }}
            />
          </Button>

          {loading === 1 ? (
            <div style={{ display: "inline-block" }}>
              {" "}
              <ClipLoader loading={true} color="green" />
            </div>
          ) : loading >= 2 ? (
            <CheckCircleIcon style={{ color: "green" }} />
          ) : null}

          {/* <Button
            variant="contained"
            size="small"
            color="warning"

            style={{
              display: "inline-block",
              marginBottom: 25,
              marginRight: 10,
              fontSize: 12
            }}
            onClick={handleUpload}
          >
            Update
          </Button>
          {loading === 3 ? (
            <div style={{ display: "inline-block" }}>
              {" "}
              <ClipLoader loading={true} color="green" />
            </div>
          ) : loading === 4 ? (
            <CheckCircleIcon style={{ color: "green" }} />
          ) : null} */}
          {/* {filename !== "" ? (
            <div style={{ textAlign: "left", fontSize: 10 }}>{filename}</div>
          ) : null} */}
        </div>

        {/* </Paper> */}
      </form>
    </React.Fragment>
  );
};
