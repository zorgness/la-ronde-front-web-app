import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { instruments } from '../Data/instruments';
import { fetchDataWithMethod } from '../../Api/fecthDataWithMethod';

const InstruForm = ({userId, instruPresent}) => {

  const urlMain = process.env.REACT_APP_URL_MAIN

  const type = 'checkbox';

  const [userChoices, setUserChoices] = useState(({ selections: [] }))

  const handleCheckBoxChange = (name) => {

    let tmpSelection = userChoices.selections
    let find = tmpSelection.indexOf(name)
    if (find > -1) {
      tmpSelection.splice(find, 1)
    } else {
      tmpSelection.push(name)
    }
    setUserChoices({
      selections: tmpSelection,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    instruPresent.forEach(element => {
      const options = {}
      fetchDataWithMethod(urlMain + element['@id'], 'DELETE', options)
    });

    userChoices.selections.forEach(instrument => {
      const options = {name: instrument, player: userId}
      fetchDataWithMethod(urlMain + '/api/instruments', 'POST', options)
    })

    setUserChoices({selections: []})

    alert('Send')

  }

    const isPresent = instru => {
      const present = instruPresent.map(element => {
        return element.name
      })
      return present.includes(instru.name)
    }



  return (


    <Form className='d-flex justify-content-around flex-wrap w-50 gap-5' onSubmit={handleSubmit}>
    {
      instruments?.map((instru, index) => {

        return (

          <Form.Check
            key={index}
            type={type}
            id={instru.id}
            value={instru.name}
            label={instru.name}
            defaultChecked={isPresent(instru)}
            selected={userChoices.selections.includes(instru.name)}
            onChange={() => handleCheckBoxChange(instru.name)}
          />


        )
      })
    }

    <Button type='submit' className='btn btn-primary' >
      Submit
    </Button>

    </Form>

  )


}

export default InstruForm
