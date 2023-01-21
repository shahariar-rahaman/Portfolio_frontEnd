import React, { useContext } from 'react'
import { Container,Form,Button,InputGroup } from 'react-bootstrap'
import {store} from '../ContextProvider'
import JoditEditor from 'jodit-react';
import { useState, useRef} from 'react'
import axios from 'axios';

const BlogEdit = () => {
  const editor = useRef(null);
  const {state,dispatch} = useContext(store)
  const [content, setContent] = useState('')
  const [url,setUrl] = useState('')
  const [loading,setLoading] = useState(false)
  const[title,setTitle]=useState("")
  const [fileData, setFileData] = useState(null)
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
          const { data } = await axios.post(`http://localhost:8000/upload`, fileData, config)
          setUrl(data.secure_url)
          setLoading(false)
      }
      catch(err){
        console.log(err)
        setLoading(false)
      }
    }
    const handleSubmit = ()=>{
    async function blogPost(){
      const {data} = await axios.post("http://localhost:8000/blogEdit",{
        name:state.userInfo.name,
        title:title,
        description:content,
        image:url
        
      })
    }
    blogPost()
    }
  return (
  <>
    <Container>
        {
          state.userInfo?
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
		
    <InputGroup size="sm" className="mt-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm" type='file' onChange={handleFileChange}/>
          <button onClick={handleUpload} >Upload</button>
        </InputGroup>
        
          <Button onClick={handleSubmit} variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
          
          :
          <h1>Please Login At First</h1>
        }
    </Container>
  </>
  )
}

export default BlogEdit