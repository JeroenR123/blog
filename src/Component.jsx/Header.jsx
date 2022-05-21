import React from "react"

function Header() {
  return (
    <div>
      <div className='w-screen bg-slate-600 h-20 shadow-md flex items-center'>
        <div className='mx-auto text-4xl font-bold'>
          The ethical advice blog
        </div>
        <div className='absolute flex-row mx-2'>
          <div className='text-sm font-bold'>Hosted by:</div>
          <div className='text-sm'>Immanuel Kant</div>
          <div className='text-sm'>Jeroen Raap</div>
        </div>
      </div>
    </div>
  )
}

export default Header
