import { useState } from "react"


function Definition({ text, defnintion }) {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(true)
  }
  const offHover = () => {
    setHover(false)
  }

  function capatalize(str){
      str.toString()
      return str.charAt(0).toUpperCase() + str.slice(1)


  }

  const upperCaseText = capatalize(text)
  if (!hover) {
    return (
      <>
        <btn className='link' onMouseEnter={onHover}>
          {text}
        </btn>
      </>
    )
  } else {
    return (
      <>
        <btn className='link hover:text-black' onMouseLeave={offHover}>
          {" "}
          {text}{" "}
        </btn>
        <div className='absolute flex card w-5/12 text-md right-0 bottom-0 bg-slate-800'>
          <div className='card-title mx-auto text-md '>{upperCaseText}</div>
          <div className='card-body text-sm font-normal'>{defnintion}</div>{" "}
        </div>
      </>
    )
  }
}

export default Definition
