import React, { useState } from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { PDF_Viewer } from './Tools/Pdf_viewer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AdminPanel } from './Components/adminpanel';

function App() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoomLevel,setZoomLevel]=useState(100)
  const [selectedFile,setSelectedFile]=useState("")
  const [searchkeyword,setSearchKeyword]=useState("")
  const [user,setUser]=useState(null)
  
  return (
    <div className="App">
          {/* <ExcelUpload /> */}
        
        <Router>
        <Navbar numPages={numPages} setNumPages={setNumPages} pageNumber={pageNumber} setPageNumber={setPageNumber} zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} setSearchKeyword={setSearchKeyword} selectedFile={selectedFile} user={user} setUser={setUser}/>
  
          <Routes>
            <Route path="/" element={<PDF_Viewer  setNumPages={setNumPages} pageNumber={pageNumber} setPageNumber={setPageNumber}  selectedFile={selectedFile} setSelectedFile={setSelectedFile} zoomLevel={zoomLevel}/>}></Route>
            <Route path="/adminpanel" element={<AdminPanel selectedFile={selectedFile} setSelectedFile={setSelectedFile} searchkeyword={searchkeyword} user={user}/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
