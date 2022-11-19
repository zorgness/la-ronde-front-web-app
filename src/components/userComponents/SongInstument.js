import React, {useState, useEffect} from 'react'
import { fetchData } from '../../Api/fetchData'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

const SongInstument = ({instruments}) => {

  const [items, setItems] = useState([])
  const [selected, setSelected] = useState(0)
  const [isPosted, setIsPosted] = useState(false)

  useEffect(() => {

    const urlMain = process.env.REACT_APP_URL_MAIN
    return(() => {
      instruments.forEach(element => {
        fetchData(urlMain + element).then(res => {
          setItems(prev => [...prev, res])
        })
      });
    })

  }, [instruments])

  const handleChange = e => {
    setSelected(e.target.value)

    if (e.target.value === "3") {
      setIsPosted(false)
    }
  }

  const select = (
    <Form.Select aria-label="Default select example" onChange={handleChange}>
        <option>Status</option>
        <option value="1">Training</option>
        <option value="2">Ready</option>
        <option value="3">Quit</option>
    </Form.Select>
  )

  const handleClick = () => {
    setSelected(0)
    setIsPosted(true)
  }

  const styles = [{}, {backgroundColor: "orange"}, {backgroundColor: "green"}]

  const falseUser = (isPosted) => (
    !isPosted
    ? <Button onClick={handleClick}>Take post</Button>
    : <div><div className="p-1" style={styles[selected]}>Seb </div><div className='mt-3'>{select}</div></div>
  )

  const falseData = [<div className='bg-success p-1'>José</div>, falseUser(isPosted) , <Button>Take post</Button>, <div className='p-1' style={{backgroundColor: 'orange'}}>Denis</div>, <Button>Take post</Button> ]

  return (
    <div>
      <Table striped bordered hover variant="secondary">

      <tbody>

      {
        items.map((item, index )=> {
          return (

                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{falseData[index]}</td>
                  </tr>
              )
        })
      }

        </tbody>
      </Table>
    </div>
  )
}

export default SongInstument
