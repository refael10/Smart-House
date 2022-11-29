import React from 'react'
import { Link } from 'react-router-dom'


export default function Rooms(props) {
  return (
    <div>
      <div className='div-rooms'>
        {props.room.map((val)=>{
     return<Link to={`room${val.name}`}><button id='btn-rooms' style={{backgroundColor:val.color}}>{val.name}</button></Link>
      })}
      </div>
      
      <div>
       <Link to={'addRoom'}><button id='btn1'>+</button></Link>
      </div>
    </div>
  )
}
