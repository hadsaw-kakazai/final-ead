import React from 'react'
import Nav from '../Nav'

export default function AddRecepie() {
  return (
    <div>
        <Nav/>
      <form action="" method="POST" > 
      <input type="text" placeholder ="Enter Recepie Title" onChange={()=>{}} required={true}/><br/>
      <input type="text" placeholder ="Enter Recepie Description" onChange={()=>{}} required={true}/><br/>
      <input type="text" placeholder ="Enter Recepie Ingrdients" onChange={()=>{}} required={true}/><br/>
      <input type="text" placeholder ="Enter Recepie Instructions" onChange={()=>{}} required={true}/><br/>
      
      <input type="file" placeholder ="Enter Recepie Image" onChange={()=>{}}/><br/>
      <button type='submit'>Add Recepie</button>
      </form>
    </div>
  )
}
