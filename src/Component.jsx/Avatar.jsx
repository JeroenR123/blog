import React from 'react'

export default function Avatar({url, name}) {
  return (
    <div className='h-20 mx-2 flex flex-row items-center'>
    {" "}
    <div className='avatar h-20'>
      <img
        className='rounded-xl border '
        src={url}
        alt=''
      />
    </div>
    <div className="text-xl mx-2 my-2 ">{name}</div>
  </div>
  )
}

