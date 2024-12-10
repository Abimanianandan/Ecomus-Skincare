import React from 'react'
import '../button/Button.css'

const Button = () => {
  return (
    <button
    className="btn mt-4 p-2 text-dark flash-button"
    style={{ backgroundColor: "white", width: "200px" }}
  >
    Shop Collection
  </button>
  )
}

export default Button