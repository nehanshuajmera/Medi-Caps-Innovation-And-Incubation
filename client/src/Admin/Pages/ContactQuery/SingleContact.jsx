import React from 'react'

export default function SingleContact({props}) {
  return (
    <tr className='single-query-box'>
        <td>{props.name}</td> 
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.query}</td>
        <td>{props.idea}</td>
        <td>{props.message}</td>
    </tr>
  )
}
