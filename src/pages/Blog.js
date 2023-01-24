import axios from 'axios'
import React, { useContext, useEffect,useState } from 'react'
import { Container,Card,ListGroup,Button } from 'react-bootstrap'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { store } from '../ContextProvider'
import {Link, useNavigate} from 'react-router-dom'
const Blog = () => {
const {state,dispatch,updatetBlogData,setUpdateBlogData} = useContext(store)
const [blogData,setBlogData] = useState([])
const navigator = useNavigate();
const URL=process.env.REACT_APP_BASE_URL

useEffect(()=>{
    async function blog(){
    const {data} = await axios.get(`${URL}/blogEdit`)
    setBlogData(data)
}blog()
},[])

const handleDelete = async (id) =>{
    const {data} = await axios.delete(`${URL}/blogEdit/${id}`)
    const updatetBlog = blogData.filter((response)=>response._id!==data._id)
    setBlogData(updatetBlog)
}
const [data,setdata] = useState("")
const handleUpdate = (id)=>{
  // console.log("Hi")
  //   const {data} = await axios.get(`${URL}/blogEdit/${id}`)
  // setUpdateBlogData(id)
  localStorage.setItem("id",id)
  navigator('/blogUpdate')
}
  console.log(updatetBlogData)
  
  return (
    <>
    {blogData.map((item)=>(
            <Container key={item._id} className="mt-5">
            <Card xs={12} style={{border:'none'}}>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{item.name}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Title className='p-0 m-0'>{item.title}</Card.Title>
            </Card.Body>
            <Card.Img src={item.image} className="blogImage" />
            <ListGroup className="mt-3 list-group-flush" >
              <ListGroup.Item dangerouslySetInnerHTML={{ __html: item.description }}></ListGroup.Item>
            </ListGroup>
          </Card>
          {
            state.userInfo!==null && item.id===state.userInfo._id?
            <div className='blogButtonFlex'>
            <Button className="mt-3 blogButton delete" onClick={()=>handleDelete(item._id)}><BsFillTrashFill/><p>Delete</p></Button>
            <Button className="mt-3 blogButton edit" onClick={()=>handleUpdate(item._id)}><AiFillEdit/><p>Edit</p></Button>
            </div>
            :
            <>
            <div className='blogButtonFlex'>
            <Button className="mt-3 blogButton delete" disabled><BsFillTrashFill/><p>Delete</p></Button>
            <Button className="mt-3 blogButton edit" disabled><AiFillEdit/><p>Edit</p></Button>
            </div>
            </>
          }
          </Container>
        ))}

        
    </>
  )
}

export default Blog