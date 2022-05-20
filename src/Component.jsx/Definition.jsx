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
        <a className='link' onMouseEnter={onHover}>
          {text}
        </a>
      </>
    )
  } else {
    return (
      <>
        <a className='link' onMouseLeave={offHover}>
          {" "}
          {text}{" "}
        </a>
        <div className='absolute flex card bg-slate-800'>
          <div className='card-title mx-2 my-2'>{upperCaseText}</div>
          <div className='card-body'>{defnintion}</div>{" "}
        </div>
      </>
    )
  }
}

export default Definition
