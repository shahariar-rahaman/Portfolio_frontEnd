import React, { useContext, useEffect } from 'react'
import { Container,Form,Button,InputGroup,Spinner } from 'react-bootstrap'
import {store} from '../ContextProvider'
import JoditEditor from 'jodit-react';
import { useState, useRef} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const BlogUpdate = () => {
  const navigator = useNavigate()
  const editor = useRef(null);
  const {state,dispatch} = useContext(store)
  const [content, setContent] = useState('')
  const[spin,setSpin] = useState(false)
  const [url,setUrl] = useState('')
  const[title,setTitle]=useState("")
  const URL=process.env.REACT_APP_BASE_URL
  const postId = localStorage.getItem("id")
  useEffect(()=>{
    const handleUpdate = async (id)=>{
        console.log("Hi")
          const {data} = await axios.get(`${URL}/blogPost/${id}`)
          setTitle(data.title)
          setContent(data.description)
        }
        handleUpdate(postId)
  },[])
 
  const handleFileUpload = async (e) => {
    e.preventDefault();
    setSpin(true);
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      const { data } = await axios.post(`${URL}/upload`, bodyFormData);
      setUrl(data.secure_url);
    } catch (err) {
      console.log(err);
    }
    setSpin(false);
  };

    function handleSubmit(e){
    e.preventDefault()
    function submit(){
      const {data} = axios.put(`${URL}/blogPost/${postId}`,{
        id:state.userInfo._id,
        title:title,
        description:content,
        image:url
      })
      .then(()=>{navigator('/blog');localStorage.getItem("id",null)})
    }
    submit()
    navigator("/blog")
    }
  return (
  <>
    <Container>
    <div key ={3} className='blogEditor'>
        <p className='content'>Update Your Content</p>
        <div className='contentWidth'>
        {
          state.userInfo?
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
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
          aria-describedby="inputGroup-sizing-sm" type='file' placeholder='input your image' onChange={handleFileUpload}/>
        </InputGroup>
        {
          spin?
          <div>
          <Spinner animation="border" variant="warning" />
              <Button className="buttonStyle buttonFlex mt-3" disabled>Submit</Button>
        </div>
          :
              <Button className="buttonStyle buttonFlex mt-3" onClick={handleSubmit} type="submit">Submit</Button>
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

export default BlogUpdate