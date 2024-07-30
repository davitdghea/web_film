import React from 'react'

const Button = ({ title, customStyle }) => {
  return (
    <div>
      <button className={`bg-[#6100C2] ${customStyle} rounded-xl text-white`}>
        {title}
      </button>
    </div>
  )
}

export default Button