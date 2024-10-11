import React from 'react'
import koala from './Images/pic1.jpg'


function Imagesdemo() {
  return (
    <>
      <div>I magesDemo </div>
      <img src={koala} height='200' width='200' />
      <img src={require('./Images/pic2.jpg')} height='200' width='200' />
      <img src='Images/pic4.jpg' height='200' width='200' />
    </>
  )
}

export default Imagesdemo
