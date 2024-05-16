import React from 'react'

const SignCanvas = () => {
    return (
        <div className='project-description'>
          <h2 style={{fontWeight:500}}>Signature Canvas</h2>
          <p className='description'>
            As the name suggests Signature Canvas is a signature App where you can create your digital signature and download it. You keep the background
            upload a picture to as a background. If the document that you need sign is a picture then it really makes your work easy.
            The stack React JS and Material ui for the frontend.
            The website is deployed on firebase.
          </p>
          <a href='https://sign-canvas.web.app/' target='_blank' style={{lineHeight:1.5}}>View Site</a><br/>
          <a href='https://github.com/Nikita-Negi-03/canvas' target='_blank' style={{lineHeight:1.5}}>Github</a>
        </div>
  )
}

export default SignCanvas