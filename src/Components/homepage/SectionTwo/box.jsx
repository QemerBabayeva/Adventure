import React from 'react'

const Box = ({image,text,id}) => {
  return (
    <div className={`flex flex-col gap-2 ${id==1 || id==2 ? " w-104 h-96" : " w-80 h-96" } overflow-hidden bg-white`}
    >
        <img className='w-full h-4/5 hover:scale-110 '  src={image} alt="" />
        <p className='w-full h-1/5 bg-white text-s font-bold'>{text}</p>

    </div>
  )
}

export default Box;