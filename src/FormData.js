import React, { useState } from 'react'
import axios from 'axios'

function FormData() {
    const [data, setData] = useState({
        name:'',
        Location:'',
        email:'',
        dob:''
    })
   function handleInput(e){
       const newdata = {...data}
       newdata[e.target.id] = e.target.value
       setData(newdata)
       console.log(newdata)
    // setData ({[e.target.id] : e.target.value })
   }
   function Submit(e){
       e.preventDefault();
       axios.post('https://randomuser.me/api/',{
           name: data.name,
           Location: data.Location,
           email: data.email,
           dob: data.dob
       })
       .then((res)=>{
           console.log(res.data)
       })
   }
  return (
    <div>
        <form onSubmit={e=>Submit(e)}>
            <input placeholder='name' id='name' value={data.name} type='text' onChange={(e)=>handleInput(e)} /><br/>
            <input placeholder='Location' id='Location' value={data.Location} type='text' onChange={(e)=>handleInput(e)} /><br/>
            <input placeholder='email' type='email' id='email' value={data.email} onChange={(e)=>handleInput(e)} /><br/>
            <input placeholder='dob' type='date' id='dob' value={data.dob} onChange={(e)=>handleInput(e)}  /><br/>
            <button type='submit'>Submit</button><br/>
        </form>
    </div>
  )
}

export default FormData