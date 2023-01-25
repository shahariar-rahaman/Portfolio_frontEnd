import React, { useContext } from 'react'
import { Container,Form,Button,InputGroup,Spinner } from 'react-bootstrap'
import {store} from '../ContextProvider'
import JoditEditor from 'jodit-react';
import { useState, useRef} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const navigator = useNavigate()
  const editor = useRef(null);
  const {state,dispatch} = useContext(store)
  const [content, setContent] = useState('')
  const[spin,setSpin] = useState(false)
  const [url,setUrl] = useState('')
  const[title,setTitle]=useState("")
  const URL=process.env.REACT_APP_BASE_URL
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
    async function submit(){
      const {data} = await axios.post(`${URL}/blogPost`,{
        id:state.userInfo._id,
        name:state.userInfo.name,
        title:title,
        description:content,
        image:url
      })
    }
    submit()
    navigator('/blog')
    }
  return (
    <div className="backGround">
    <Container>
  <div key ={2} >
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
  </div>
    </Container>
    </div>
  )
}

export default BlogPost