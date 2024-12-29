import React from 'react';

export default function Result(props) {
  return (
    <>
      <div>
        <img src={props.urls.small} alt={props.user.name}/>
      </div>
    </>
  )
} 
