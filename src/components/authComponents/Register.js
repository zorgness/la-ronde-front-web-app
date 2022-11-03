import React, { useReducer } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux'
import { registerSubmitReducer, initialReducerValue } from './registerSubmitReducer';
import { userRegister, userRegisterComplete } from '../../redux/actions/actions'

const Register = ({registerData, register }) => {

  const [state, dispatch] = useReducer(registerSubmitReducer, initialReducerValue);

  const {email, firstName, lastName, username, city, phone, password, verification} = state

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== verification) return



    register(state)

    console.log(registerData)
  }

  return (

    <Container className='mt-5'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
           type="email"
           name="email"
            value={email}
            onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value: e.target.value
              })
            }
           placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
           type="text"
           name="firstName"
            value={firstName}
            onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value: e.target.value
              })
            }
           placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>LastName</Form.Label>
          <Form.Control
           type="text"
           name="lastName"
            value={lastName}
            onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value: e.target.value
              })
            }
           placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control
           type="text"
           name="username"
            value={username}
            onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value: e.target.value
              })
            }
           placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
           type="text"
           name="city"
            value={city}
            onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value: e.target.value
              })
            }
           placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
           type="text"
           name="phone"
            value={phone}
            onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value: e.target.value
              })
            }
           placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
           type="password"
           name="password"
            value={password}
            onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value: e.target.value
              })
            }
           autoComplete='false' placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordVerification">
          <Form.Label>Password Verification</Form.Label>
          <Form.Control
           type="password"
           autoComplete='false'
           value={verification}
           name="verification"
           onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value: e.target.value
              })
            }
           placeholder="Password verification" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

const mapStateToProps = state => ({
  registerData: state.registration
});

const mapDispatchToProps = dispatch => {
  return {
    register: options => dispatch(userRegister(options)),
    Complete: () => dispatch(userRegisterComplete())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
