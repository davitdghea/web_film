import React from 'react'

const Button = ({ title, pad }) => {
  return (
    <div>
      <button className={`bg-[#6100C2] ${pad} rounded-2xl text-white`}>
            {title}
        </button>
    </div>
  )
}

export default Button