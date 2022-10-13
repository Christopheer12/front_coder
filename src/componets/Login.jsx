import React from 'react'

const login = () => {
  fetch("http://localhost:8080")
  .then(response => response.json())
  .then(data => console.log(data));
  return (
    <div>login</div>
  )
}

export default login