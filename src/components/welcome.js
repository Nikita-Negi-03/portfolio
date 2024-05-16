import '../App.css'
import React, {useEffect, useState} from 'react'

const Welcome = () => {

  const [revealText, setRevealText] = useState('');

  useEffect(() => {
    const text = 'Welcome.';
    const revealInterval = 200; // Interval between revealing characters (in milliseconds)
    let index = 0;

    const timer = setInterval(() => {
      if (index <= text.length) {
        setRevealText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, revealInterval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animation-container">
        <svg viewBox="0 10 300 90" className="svg-container">
          <text x="0" y="80" fontSize="60" fill="#fff" fontWeight={300}>
            {revealText}
          </text>
        </svg>
        <div className='intro'>
          My name is Nikita Negi, I'm a fullstack developer based in Gurgaon, Haryana, India. I have developed many types of websites from chatting website to video call website. I'm passionate about cutting-edge, pixel-perfect, beautiful websites.
        </div>
    </div>
  )
}

export default Welcome