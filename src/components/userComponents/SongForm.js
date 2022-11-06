import React, {useEffect,  useReducer } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { setListNewSong } from '../../redux/actions/actions'
import { dataSubmitReducer, initialSongValue } from '../../redux/reducers/dataSubmitReducer';

const SongForm = ({newSong}) => {

  const navigate = useNavigate()

  const params = useParams()

  const [state, dispatch] = useReducer(dataSubmitReducer, initialSongValue);

  const {name, creator, interpret, link, tempo, tone} = state;

  useEffect(() => {

    return(() => {

      dispatch({
        type: 'input',
        name: "list",
        value: `/api/set_lists/${params.id}`})

    })

  }, [params.id])

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
    newSong(state)
    navigate('/dashboard')

  }


  return (
    <Container>
    <h2>Song new</h2>
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
          <Form.Label>Créateur</Form.Label>
          <Form.Control
          type="text"
          placeholder="créateur"
          autoComplete='false'
          name="creator"
            value={creator}
            onChange={(e) => dispatch({
              type: 'input',
              name: e.target.name,
              value: e.target.value
            })}   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Interpréte</Form.Label>
          <Form.Control
          type="text"
          placeholder="Interpréte"
          autoComplete='false'
          name="interpret"
            value={interpret}
            onChange={(e) => dispatch({
              type: 'input',
              name: e.target.name,
              value: e.target.value
            })}   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Link</Form.Label>
          <Form.Control
          type="text"
          placeholder="link"
          autoComplete='false'
          name="link"
            value={link}
            onChange={(e) => dispatch({
              type: 'input',
              name: e.target.name,
              value: e.target.value
            })}   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Tempo</Form.Label>
          <Form.Control
          type="text"
          placeholder="tempo"
          autoComplete='false'
          name="tempo"
            value={tempo}
            onChange={(e) => dispatch({
              type: 'input',
              name: e.target.name,
              value: e.target.value
            })}   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Tone</Form.Label>
          <Form.Control
          type="text"
          placeholder="tone"
          autoComplete='false'
          name="tone"
            value={tone}
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
    newSong: options => dispatch(setListNewSong(options))
  }
}

export default connect(null, mapDispatchToProps )(SongForm)
