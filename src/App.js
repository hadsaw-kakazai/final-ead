import logo from './logo.svg';
import './App.css';
import AddRecepie from './components/AddRecepie';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ViewReceipe from './components/ViewReceipe'
import NoPage from './components/NoPage'
import Nav from './Nav';import React, { useState } from 'react'

function App() {
  const [result,setResult] = useState([])
  return (
    
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<AddRecepie result={result} setResult={setResult}  />} />
          <Route path="ViewReceipe" element={<ViewReceipe result={result}/>} />
          
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
     
 
    </>
  );
}

export default App;
