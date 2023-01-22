import React, { useContext } from 'react'
import { Container,Form,Button,InputGroup,Spinner } from 'react-bootstrap'
import {store} from '../ContextProvider'
import JoditEditor from 'jodit-react';
import { useState, useRef} from 'react'
import axios from 'axios';

const BlogEdit = () => {
  const editor = useRef(null);
  const {state,dispatch} = useContext(store)
  const [content, setContent] = useState('')
  const[spin,setSpin] = useState(false)
  const [url,setUrl] = useState('')
  const [loading,setLoading] = useState(false)
  const[title,setTitle]=useState("")
  const [fileData, setFileData] = useState(null)
  const URL=process.env.REACT_APP_BASE_URL
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
          const { data } = await axios.post(`${URL}/upload`, fileData, config)
          setUrl(data.secure_url)
          setLoading(false)
      }
      catch(err){
        console.log(err)
        setLoading(false)
      }
      setSpin(true)
    }
    const handleSubmit = (e)=>{
    e.preventDefault()
    async function blogPost(){
      const {data} = await axios.post(`${URL}/blogEdit`,{
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
    <div className='blogEditor'>
        <p className='content'>Post Your Content</p>
        <div className='contentWidth'>
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
          <Button className='buttonStyle uploadSumission' onClick={handleUpload} >Upload</Button>
        </InputGroup>
        {
          spin?
        <div className='submitButton'>
          <Button className="buttonStyle mt-3" onClick={handleSubmit} type="submit">
            Submit
          </Button>
          </div>
          :
          <div className='submitButton'>
          <Button className="buttonStyle mt-3" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      </div>
        }
        
        </Form>
          
          :
          ""
        }
        </div>
        </div>
    </Container>
  </>
  )
}

export default BlogEdit