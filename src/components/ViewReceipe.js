import React from 'react'
import Nav from '../Nav'
import { Link } from 'react-router-dom';

export default function ViewReceipe({result,setFormSubmit}) {

    const port = 5000;
   
    function fetchData(){
        // fetch("http://localhost:5000/recepie/get").then((response) => response.json().then((json)=>{
        //    result = json
        //   }))
    }
  return (
    <div>
        <Link to="/">Home</Link>
      <h2>Data</h2>
      {setFormSubmit(false)}
        {
      result.map((data) =>{
        return(
          <div key={data.id}>
            <h1>{data.title}</h1>
          </div>
        )}
      )}
    </div>
  )
}
