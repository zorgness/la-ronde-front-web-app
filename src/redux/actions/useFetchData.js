import React from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetching':
      return {status: 'fetching', data: null, error: null}
    case 'done':
      return {status: 'done', data: action.payload, error: null}
    case 'fail':
      return {status: 'fail', data: null, error: action.error}
    default:
      throw new Error('Action non supporté')
  }
}

export const useFetchData = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    data: null,
    error: null,
    status: 'idle',
  })
  const {data, error, status} = state

  const execute = React.useCallback(promise => {
    dispatch({type: 'fetching'})
    promise
      .then(marvel => dispatch({type: 'done', payload: marvel}))
      .catch(error => dispatch({type: 'fail', error}))
  }, [])


  return {data, error, status, execute}
}
