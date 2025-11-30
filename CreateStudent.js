import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateStudent(){
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [place,setPlace]=useState("");
    const [phone,setPhone]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const studentData={id,name,place,phone};
        console.log(studentData);
        fetch("http://localhost:8000/students",{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(studentData)

            
    })
        .then((res)=>{
            alert("Student Data Saved Successfully");
            navigate("/");
        })
        .catch((err)=>console.log(err.message)
    )
    }

    return(
        <div className="container">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>

                <input type="text" id="id" name="id" required value={id} onChange={e=>setId
                (e.target.value)
                }/>

                <label htmlFor="name">NAME:</label>

                <input type="text" id="name" name="name" required value={name} onChange={e=>setName
                (e.target.value)}/>
                
                
                <label htmlFor="place">PLACE:</label>
                
                
                <input type="text" id="place" name="place" required value={place} onChange={e=>setPlace
                (e.target.value)}/>
                
                
                <label htmlFor="phone">PHONE:</label>
                
                
                <input type="text" id="phone" name="phone" required value={phone} onChange={e=>setPhone
                 (e.target.value)}/>
                
                <div>
                <button className="btn btn-save">Save</button> 
                <Link to="/" className="btn btn-back">Back</Link>
                </div>
            </form>
        </div>
    )
}