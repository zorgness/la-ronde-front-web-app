import React, {useState, useEffect,  useReducer } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userSetListNew } from '../../redux/actions/actions'
import { dataSubmitReducer, initialSetListValue } from '../../redux/reducers/dataSubmitReducer';

const UserSetListForm = ({newSetList}) => {

  const userData = JSON.parse(localStorage.getItem('userData'));

  const navigate = useNavigate()

  const [state, dispatch] = useReducer(dataSubmitReducer, initialSetListValue);

  const [load, setLoad] = useState(true)

  const {name, theme, city} = state;

  useEffect(() => {

  if(load) {

    return(() => {
      dispatch({
        type: 'input',
        name: "owner",
        value: userData['@id']})
        setLoad(false)
    })
   }
  }, [load, userData])



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'input',
      name: "owner",
      value: userData['@id']})
    newSetList(state)
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
            <Form.Select
            name="theme"
              value={theme}
              onChange={(e) => dispatch({
                type: 'input',
                name: e.target.name,
                value: e.target.value
              })}>
               <option>choisir un théme</option>
                <option value="variété">variété</option>
                <option value="rock">rock</option>
                <option value="jazz">jazz</option>
                <option value="funk">funk</option>
                <option value="reggae">reggae</option>
            </Form.Select>
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
    newSetList: (options) => dispatch(userSetListNew(options))
  }
}

export default connect(null, mapDispatchToProps)(UserSetListForm)
