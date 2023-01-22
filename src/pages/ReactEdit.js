import React, { useContext } from 'react'
import { Container,Form,Button,InputGroup } from 'react-bootstrap'
import {store} from '../ContextProvider'
import JoditEditor from 'jodit-react';
import { useState, useRef} from 'react'
import axios from 'axios';

const ReactEdit = () => {
    const editor = useRef(null);
    const {state,dispatch} = useContext(store)
    const [content, setContent] = useState('')
    const [url,setUrl] = useState('')
    const [link,setLink] = useState('')
    const [loading,setLoading] = useState(false)
    const[title,setTitle]=useState("")
    const [fileData, setFileData] = useState(null)
    const urL=process.env.REACT_APP_BASE_URL
    const handleFileChange = (e) => {
          const file = e.target.files[0];
          const bodyFormData = new FormData();
          bodyFormData.append('file', file);
          setFileData(bodyFormData)
      }
      const handleUpload = async (e) => {
      e.preventDefault()
        setLoading(true)
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        try {
            const { data } = await axios.post(`${urL}/upload`, fileData, config)
            setUrl(data.secure_url)
            setLoading(false)
        }
        catch(err){
          console.log(err)
          setLoading(false)
        }
      }
     //Comment
      let projectArr =[]
      console.log(projectArr)
      const handleFigma=()=>{
        console.log("Hi")
        if(projectArr.indexOf("Figma") >=0){
            projectArr.splice(projectArr.indexOf("Figma"),1)
        }
        else{
            projectArr.push("Figma")
        }
        console.log(projectArr)
      }
      const handleHtml=()=>{
        console.log("Hi")
        if(projectArr.indexOf("Html/CSS") >= 0){
            projectArr.splice(projectArr.indexOf("Html/CSS"),1)
        }
        else{
            projectArr.push("Html/CSS")
        }
        console.log(projectArr)
      }
      const handleReact=()=>{
        console.log("Hi")
        if(projectArr.indexOf("React") >= 0 ){
            projectArr.splice(projectArr.indexOf("React"),1)
        }
        else{
            projectArr.push("React")
        }
        console.log(projectArr)
      }
      const handleBootstrap=()=>{
        console.log("Hi")
        if(projectArr.indexOf("Bootstrap/Others") >= 0){
            projectArr.splice(projectArr.indexOf("Bootstrap/Others"),1)
        }
        else{
            projectArr.push("Bootstrap/Others")
        }
        console.log(projectArr)
      }
      
      console.log(projectArr)
      //Comment
      const handleSubmit = (e)=>{
      e.preventDefault()
        async function figmaPost(){
          const {data} = await axios.post(`${urL}/reactEdit`,{
            title:title,
            description:content,
            link:link,
            image:url,
            project:projectArr
            
          })
        }
        figmaPost()
        }
  return (
    <Container>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
          </Form.Group>
          <JoditEditor
			ref={editor}
			value={content}
			tabIndex={1} 
			onBlur={newContent => setContent(newContent)} 
			onChange={newContent => {}}/>
		 <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Title" onChange={(e)=>setLink(e.target.value)}/>
          </Form.Group>
    <InputGroup size="sm" className="mt-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm" type='file' onChange={handleFileChange}/>
          <button onClick={handleUpload} >Upload</button>
        </InputGroup>
        <div className='mt-3'>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Figma"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            onChange={handleFigma}
          />
          <Form.Check
            inline
            label="Html/CSS"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            onChange={handleHtml}
          />
            <Form.Check
              inline
              label="Bootstrap/Others"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              onChange={handleBootstrap}
            />
          <Form.Check
            inline
            label="React"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            onChange={handleReact}
          />
          
          
        </div>
      ))}
    </div>
          <Button onClick={handleSubmit} variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
        
    </Container>
  )
}

export default ReactEdit