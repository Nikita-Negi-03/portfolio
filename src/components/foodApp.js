import {Box} from '@mui/material'
import React from 'react'

const FoodApp = () => {
  return (
    <div className='project-description'>
      <h2 style={{fontWeight:500}}>Foodie's</h2>
      <p className='description'>
        Chatter Box is a Full Stack Chatting App where you can find users can chat with them and create groups with users.
        It Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.
        The stack is Node JS and Express JS for the backend/API's, React JS for the frontend.
        The website is hosted on render and firebase.
      </p>
      <a href='https://foodie-app-f88d7.web.app/' target='_blank' >View Site</a>
    </div>
  )
}

export default FoodApp