import {Box, Typography} from '@mui/material'
import React from 'react'

const Projetcs = ({handleClick}) => {
  return (
    <div>
        <h1 style={{fontWeight:400}}>
            Projects
        </h1>
        <ul >
            <li onClick={()=> handleClick(0)}>Home</li>
            <li onClick={()=> handleClick(1)}>Chatter Box</li>
            <li onClick={()=> handleClick(2)}>Food App</li>
            <li onClick={()=> handleClick(3)}>Test App</li>
        </ul>
    </div>
  )
}

export default Projetcs