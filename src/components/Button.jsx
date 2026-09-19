import React from 'react'

const Button = ({ className, text, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-[var(--background)] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] transition-all duration-300 lg:py-4 lg:font-bold lg:px-9 py-3 px-10 cursor-pointer rounded-2xl ${className}`}
    >
      {text}
    </button>
  )
}

export default Button