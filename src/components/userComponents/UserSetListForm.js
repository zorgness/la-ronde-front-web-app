import React, {useEffect,  useReducer } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { dataSubmitReducer, initialSetListValue } from '../../redux/reducers/dataSubmitReducer';

const UserSetListForm = () => {

  const userData = JSON.parse(localStorage.getItem('userData'));

  const [state, dispatch] = useReducer(dataSubmitReducer, initialSetListValue);

  const {name, theme, city} = state;

  useEffect(() => {

    return(() => {

      dispatch({
        type: 'input',
        name: "owner",
        value: userData['@id']})

    })

  }, [userData['@id'].length])



  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
  }

  return (
      <Container>
          <h2>Nouvelle Set List</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="nom"
              autoComplete='false'
              name="name"
              value={name}
              onChange={(e) => dispatch({
                type: 'input',
                name: e.target.name,
                value: e.target.value
              })} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Theme</Form.Label>
            <Form.Control
            type="text"
            placeholder="theme"
            autoComplete='false'
            name="theme"
              value={theme}
              onChange={(e) => dispatch({
                type: 'input',
                name: e.target.name,
                value: e.target.value
              })}   />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ville</Form.Label>
            <Form.Control
            type="text"
            placeholder="ville"
            autoComplete='false'
            name="city"
              value={city}
              onChange={(e) => dispatch({
                type: 'input',
                name: e.target.name,
                value: e.target.value
              })}   />
          </Form.Group>

          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
        </Form>
      </Container>
  )
}

export default UserSetListForm
