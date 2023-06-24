import React from 'react'
import Nav from '../Nav'

export default function ViewReceipe() {

    function fetchData(value){
        fetch("/api/recepies").then(function(response){response.json()}.then(function(response){

        }))
    }
  return (
    <div>
      
    </div>
  )
}
