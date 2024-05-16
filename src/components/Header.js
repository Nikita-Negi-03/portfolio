import React from 'react'

const Header = ({handleClick}) => {
  return (
    <>
        <div className='logo'>
            <span className='text' onClick={()=> handleClick(0)}>N</span>
        </div>
        <div className='links'>
            <span><a href='mailto:nikitanegi044@gmail.com' ><i className="fa-regular fa-envelope"></i></a></span>
            <span><a href='https://github.com/Nikita-Negi-03' target="_blank" ><i className="fa-brands fa-github"></i></a></span>
        </div>
    </>
  )
}

export default Header