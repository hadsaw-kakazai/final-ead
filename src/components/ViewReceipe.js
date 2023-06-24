import React from 'react'
import Nav from '../Nav'
import { Link } from 'react-router-dom';

export default function ViewReceipe({result}) {

    const port = 5000;
   

  return (
    <div>
        <Link to="/">Home</Link>
      <h2>Data</h2>
    
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
