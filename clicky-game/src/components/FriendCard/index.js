import React from 'react';
import './style.css';

function FriendCard (props) {
  return (
    <div className='card'>
      <div className='img-container'>
        <img alt={props.name} src={props.image} />
      </div>
      <div className='content'>
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      {/*
      4. In the FriendCard component use the prop that holds the `removeFriend`
      method as a callback for an `onClick` listener on the "remove" span.
      */}
      <span onClick={() => props.removeFriend(props.id)} className='remove'>
        𝘅
      </span>
    </div>
  )
}

export default FriendCard
