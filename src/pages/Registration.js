import {Container, Form,Button} from 'react-bootstrap'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
const Registration = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [nameErr,setNameErr] = useState("")
    const [emailErr,setEmailErr] = useState("")
    const [passwordErr,setPasswordErr] = useState("")
    const [confirmPasswordErr,setConfirmPasswordErr] = useState("")
    
    const navigator = useNavigate()
    
    const handleSubmit=(e)=>{
    e.preventDefault()
        console.log("hi")
        if(name === ""){
            setNameErr("Can't Be Empty")
        }
        else if(email === "" ){
            setEmailErr("Can't Be Empty")
        }
        else if(password === "" ){
            setPasswordErr("Can't Be Empty")
        }
        else if(password !== confirmPassword){
            setConfirmPasswordErr("Not Match")
        }
        else{
               async function admin(){
                        await axios.post("http://localhost:8000/registration",{
                            name:name,
                            email:email,
                            password:password,
                            is_admin:false
                        })
               }
               admin();
               setName("");
               setEmail("");
               setPassword("");
               setConfirmPassword("");
               navigator("/login")
        }
        
    }
    return (
    <>
    <Container>
    <h3>Registration</h3>
    <Form.Group className="mb-3">
        <Form.Control onChange={(e)=>setName(e.target.value)} placeholder="Name" value={name} type="name"/>
        {
            nameErr?
            <Form.Text className="text-muted err">{nameErr}</Form.Text>
            :
            ""
        }
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Control onChange={(e)=>setEmail(e.target.value)} placeholder="Email" value={email} type="email"/>
        {
            emailErr?
            <Form.Text className="text-muted err">{emailErr}</Form.Text>
            :
            ""
        }
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Control onChange={(e)=>setPassword(e.target.value)} placeholder="Password" value={password} type="password"/>
      {
            passwordErr?
            <Form.Text className="text-muted err">{passwordErr}</Form.Text>
            :
            ""
        }
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Control onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" value={confirmPassword} type="password"/>
      {
            confirmPasswordErr?
            <Form.Text className="text-muted err">{nameErr}</Form.Text>
            :
            ""
        }
    </Form.Group>
    <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
      <div>
      <p>Already Have an account?</p><Link to="/login">Login</Link>
      </div>
    </Container>
  </>
  )
}

export default Registration