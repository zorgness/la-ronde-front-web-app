import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {

  const styles = {
    width: '120px',
    height: '120px',
    marginTop: '160px'
  }

  return (
    <div>
       <Spinner style={styles} animation="grow" variant="primary" />
    </div>
  )
}

export default Loader
