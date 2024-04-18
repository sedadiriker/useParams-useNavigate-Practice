import { useState,useEffect } from "react"
const ListeningEvent = () => {
  const [position,setPosition] = useState({x:0,y:0})

  useEffect(()=> {

    const handleMove = (e) => {
      setPosition({x:e.clientX, y:e.clientY})
    }
    window.addEventListener("pointermove", handleMove)
    return () => {
      window.removeEventListener("pointermove",handleMove)
    }
  })
  return (
    <div style={{
      position:"absolute",
      width:40,
      height:40,
      opacity:"0.5",
      borderRadius:"50%",
      backgroundColor:"red",
      transform: `translate(${position.x}px, ${position.y}px)`,
      top:'-20px',
      left:'-20px',
      pointerEvents:'none'
    }}>
    </div>
  )
}

export default ListeningEvent
