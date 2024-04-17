import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useGetContextHook from '../hooks/useGetContextHook';

export default function MyModal({show, handleClose }) {

  const {setSubmitOrder } = useGetContextHook()
  
  // handle when order is submitted
  function handleSubmit(){
    handleClose()
    setSubmitOrder(true)
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Submit</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you ready to submit order?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
