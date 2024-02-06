import {useState} from "react"
import "./create.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
 
function Create()  {
 const [Name, setName] = useState("")
 const [Email, setEmail] = useState("")
 
 const navigate = useNavigate()

 const onChangeName = (e) => {
    setName(e.target.value)

 }
 const onChangeEmail = (e) => {
    setEmail(e.target.value)
 }
 const onHandleSubmit = (e) => {
    axios.post("http://localhost:5000/users", {
        Name: Name,
        Email: Email,
    })
    .then(() =>  {
        navigate("/read")
    })
 } 

 return<>
 <div className="card-container">  
    <form  className="form-container" >
    <h2>Create</h2>
     <label>Name</label>
     <input type="email"  value={Name} onChange={onChangeName} /> 
     <label>Email</label>
     <input type="password" value={Email} onChange={onChangeEmail}  />
   <button type="submit" className="button" onClick={onHandleSubmit} >Submit</button>
   
</form>
</div>
</>
}

export default Create