import React, { useState, useEffect } from 'react';
import { fetchData } from '../../Api/fetchData'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InstruForm from './InstruForm'

const ModalInstru = ({instruments, songId}) =>  {

  const [show, setShow] = useState(false);

  const [userInstrus, setUserInstrus] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

    const urlMain = process.env.REACT_APP_URL_MAIN

          return(() => {

            instruments?.forEach(instruPath => {
              fetchData(urlMain + instruPath).then(res => {
                setUserInstrus(prevState => [...prevState, res])
              })
            })

          })

  }, [instruments?.length])



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Instruments
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>instruments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InstruForm instruPresent={userInstrus} songId={songId} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInstru
