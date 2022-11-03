import React from 'react'
import {connect} from "react-redux";
import {userConfirm} from "../../redux/actions/actions";


const Confirmation = ({confirm}) => {
  return (
    <div>Confirmation</div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    confirm: () => dispatch(userConfirm())
  }
}

export default connect(null, mapDispatchToProps)(Confirmation)
