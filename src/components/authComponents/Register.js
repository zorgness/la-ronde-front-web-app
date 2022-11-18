import React, { useReducer, Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux'
import { dataSubmitReducer, initialRegisterValue } from '../../redux/reducers/dataSubmitReducer';
import { userRegister, userEditProfile } from '../../redux/actions/actions'

const Register = ({register, userData, editProfile, isEdit}) => {

  const userId = localStorage.getItem('userId');

  const initialValue = isEdit ? userData : initialRegisterValue;

  const [state, dispatch] = useReducer(dataSubmitReducer, initialValue);

  const {email, firstName, lastName, username, city, phone, description, password, verification} = state;

  const handleSubmit = e => {
    e.preventDefault();

    if(isEdit) {

      editProfile(userId, state)
      alert('Edit')


    } else {

      if (password === verification) register(state)

    }
  }

  return (

    <Container className='mt-4'>
      <Form onSubmit={handleSubmit}>
       { !isEdit &&
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
           type="email"
           name="email"
           defaultValue={email}
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
        </Form.Group>}

        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
           type="text"
           name="firstName"
            defaultValue={firstName}
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
            defaultValue={lastName}
            onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value:  e.target.value
              })
            }
           placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control
           type="text"
           name="username"
            defaultValue={username}
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
            defaultValue={city}
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
            defaultValue={phone}
            onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value: e.target.value
              })
            }
           placeholder="" />
        </Form.Group>

        { isEdit &&
          <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Description</Form.Label>
          <Form.Control
           type="text"
           name="description"
            defaultValue={description}
            onChange={e =>
              dispatch({
                type: "input",
                name: e.target.name,
                value: e.target.value
              })
            }
           placeholder="" />
          </Form.Group>
        }


       {
         !isEdit &&

        <Fragment>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            name="password"

              defaultValue={password}
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
            defaultValue={verification}
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
        </Fragment>
        }


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    register: options => dispatch(userRegister(options)),
    editProfile: (userId, options) => dispatch(userEditProfile(userId, options))
  }
}

export default connect(null, mapDispatchToProps)(Register)
