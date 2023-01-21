import React, { useContext } from 'react'
import {Container, Form,Button} from 'react-bootstrap'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { store } from '../ContextProvider'
const Login = () => {
    const{state,dispatch}=useContext(store)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [emailErr,setEmailErr] = useState("")
    const [passwordErr,setPasswordErr] = useState("")
    const [wrong,setWrong]=useState("")
    const navigator = useNavigate()
    
    const handleLogin=(e)=>{
    e.preventDefault()
        if(email === "" ){
            setEmailErr("Can't Be Empty")
        }
        else if(password === "" ){
            setPasswordErr("Can't Be Empty")
        }
     
        else{
               async function admin(){
                        const {data}=await axios.post("http://localhost:8000/login",{
                            email:email,
                            password:password
                        })
                    
                        dispatch({type:"user_login",payload:data.userInfo})
                        localStorage.setItem("userInfo",JSON.stringify(data.userInfo))
                        navigator("/")

                    }
               admin();
               setEmail("");
               setPassword("");
               
        }
        
    }


  return (
    <>
    <Container>
    <h3>Login</h3>
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
    {
        wrong?
        <Form.Text className="text-muted err">{passwordErr}</Form.Text>
        :
        ""
    }
    <Button onClick={handleLogin} variant="primary" type="submit">
        Submit
      </Button>
      <div>
      <p>Don't Have account?</p><Link to="/registration">Registration</Link>
      </div>
    </Container>
  </>
  )
}

export default Login