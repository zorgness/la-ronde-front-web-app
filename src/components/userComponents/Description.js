import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { fetchDataWithMethod } from '../../Api/fecthDataWithMethod';

const Description = ({userId, handleClose}) => {

  const urlMain = process.env.REACT_APP_URL_MAIN

  const [text, setText] = useState("")

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const options = {description: text}
    fetchDataWithMethod(urlMain + userId, 'PUT', options)
    handleClose()

  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handleChange} />
          </Form.Group>
          <Button className='btn btn-primary' type="submit" >
            Submit
          </Button>
      </Form>
    </Container>
  )
}

export default Description
