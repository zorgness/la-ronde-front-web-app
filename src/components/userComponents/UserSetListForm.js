import React, {useEffect,  useReducer } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userSetListNew } from '../../redux/actions/actions'
import { dataSubmitReducer, initialSetListValue } from '../../redux/reducers/dataSubmitReducer';

const UserSetListForm = ({newSetList}) => {

  const userData = JSON.parse(localStorage.getItem('userData'));
  const userId = localStorage.getItem('userId');

  const navigate = useNavigate()

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
    newSetList(userId, state)
    navigate('/dashboard')

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

const mapDispatchToProps = dispatch => {
  return {
    newSetList: (userId, options) => dispatch(userSetListNew(userId, options))
  }
}

export default connect(null, mapDispatchToProps)(UserSetListForm)
