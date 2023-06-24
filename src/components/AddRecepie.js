import React, { useState } from 'react'
import Nav from '../Nav'
import Axios from 'axios'

export default function AddRecepie() {

  const port = 5000;
    const [formData,setFormData] = useState({
        title: '',
        description: '',
        ingredients: '',
        instructions: '',
       
    })


    

   async function handleSubmit(event){
        event.preventDefault()
        Axios.post(`http://localhost:${port}/api/endpoint`, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    }


    function handleChange(event){
        setFormData((prevData)=>{
            return {...prevData,[event.target.name]:event.target.value}
        })

     
       
    }


  return (
    <div>
    <Nav/>
      <form onSubmit={(event)=>{handleSubmit(event)}} > 
      <input type="text" placeholder ="Enter Recepie Title" value={formData.title} name='title' onChange={(event)=>handleChange(event)} required={true}/><br/>
      <input type="text" placeholder ="Enter Recepie Description" value={formData.description} name='description' onChange={(event)=>handleChange(event)} required={true}/><br/>
      <input type="text" placeholder ="Enter Recepie Ingrdients" value={formData.ingredients} name='ingredients' onChange={(event)=>handleChange(event)} required={true}/><br/>
      <input type="text" placeholder ="Enter Recepie Instructions" value={formData.instructions} name='instructions' onChange={(event)=>handleChange(event)} required={true}/><br/>
      
      {/* <input type="file" placeholder ="Enter Recepie Image" onChange={()=>{}}/><br/> */}
      <button type='submit'>Add Recepie</button>
      </form>
    </div>
  )
}
