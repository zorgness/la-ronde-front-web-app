import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { instruments } from '../Data/instruments';
import { useParams } from 'react-router-dom'
import { fetchDataWithMethod } from '../../Api/fecthDataWithMethod';

const InstruForm = ({userId, instruPresent}) => {

  const urlMain = process.env.REACT_APP_URL_MAIN;

  const params = useParams();

  const type = 'checkbox';

  const [userChoices, setUserChoices] = useState(({ selections: [] }))

  const [isPres , setisPres] = useState([])

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

    if(instruPresent) {
      instruPresent.forEach(element => {
        const options = {}
        fetchDataWithMethod(urlMain + element['@id'], 'DELETE', options)
      });

    }


    userChoices.selections.forEach(instrument => {
      let options = {}
      if(params.id) {
        options = {name: instrument, setList: `/api/set_lists/${params.id}`}
      } else {
        options = {name: instrument, player: userId}
      }

      fetchDataWithMethod(urlMain + '/api/instruments', 'POST', options)
    })

    setUserChoices({selections: []})

    alert('Send')

  }


  useEffect(() => {

    const isPresent = () => {
      const presents = instruPresent.map(element => {
        return element.name
      })
      const list = instruments.map(instrument => {
        return presents.includes(instrument.name)
      })

      setisPres(list)
    }

    if(instruPresent) {
      isPresent()
    }

  }, [instruPresent])



  return (


    <Form  onSubmit={handleSubmit} className="text-center">

      <div className='d-flex justify-content-between flex-wrap gap-5 m-5' style={{maxWidth: '440px'}}>
        {
          instruments?.map((instru, index) => {

            return (

              <Form.Check
                key={index}
                type={type}
                id={instru.id}
                value={instru.name}
                label={instru.name}
                defaultChecked={isPres[index]}
                selected={userChoices.selections.includes(instru.name)}
                onChange={() => handleCheckBoxChange(instru.name)}
              />
            )
          })
        }
      </div>

    <Button type='submit' className='btn btn-primary' >
      Submit
    </Button>

    </Form>

  )


}

export default InstruForm
