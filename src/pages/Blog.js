import axios from 'axios'
import React, { useContext, useEffect,useState } from 'react'
import { Container,Card,ListGroup,Button } from 'react-bootstrap'
import { store } from '../ContextProvider'
const Blog = () => {
const {state,dispatch} = useContext(store)

const [blogData,setBlogData] = useState([])
const URL=process.env.REACT_APP_BASE_URL
console.log(blogData)
useEffect(()=>{
    async function blog(){
    const {data} = await axios.get(`${URL}/blogEdit`)
    setBlogData(data)
}blog()
},[])


const handleDelete = () =>{


}

  return (
    <>
    {blogData.map((item)=>(
            <Container key={item._id} className="mt-5">
            <Card xs={12} style={{border:'none'}}>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{item.name}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={item.image} />
            <ListGroup className="mt-3 list-group-flush" >
              <ListGroup.Item dangerouslySetInnerHTML={{ __html: item.description }}></ListGroup.Item>
            </ListGroup>
          </Card>
          {
            state.userInfo!==null && item.name===state.userInfo.name?
            <Button className="mt-3" onClick={handleDelete}>Delete</Button>
            :
            <Button className="mt-3" disabled>Delete</Button>
            
          }
          </Container>
        ))}

        
    </>
  )
}

export default Blog