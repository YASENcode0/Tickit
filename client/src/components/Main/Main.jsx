import React from 'react'
import "./Main.css"
import Heder from '../Heder/Heder'
import AllCategories from '../AllCategories/AllCategories'

export default function Main() {
  return (
    <div className='main'>
      <Heder/>
      <AllCategories/>
    </div>
  )
}
