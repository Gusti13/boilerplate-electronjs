import React from 'react'
import { Link } from 'react-router-dom'

export default function Setting() {
  return (
    <div style={{ 
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <h5>Setting</h5>
        <Link to='/'>back</Link>
    </div>
  )
}
