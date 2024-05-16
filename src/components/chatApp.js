import {Box} from '@mui/material'
import React from 'react'

const ChatApp = () => {
  return (
    <div className='project-description'>
      <h2 style={{fontWeight:500}}>Chatter Box</h2>
      <p className='description'>
        Chatter Box is a Full Stack Chatting App where you can find users can chat with them and create groups with users.
        It Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.
        The stack is Node JS and Express JS for the backend/API's, React JS for the frontend and the website is deployed on render.
      </p>
      <a href='https://mearnchatapp.onrender.com' target='_blank' style={{lineHeight:1.5}}>View Site</a><br/>
      <a href='https://github.com/Nikita-Negi-03/MearnChatApp' target='_blank' style={{lineHeight:1.5}} >Github</a>
    </div>
  )
}

export default ChatApp