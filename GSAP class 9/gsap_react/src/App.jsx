import React, {useRef, useState} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'


export default function App(props) {

  // 1st way of writing GSAP in react 

  // useGSAP (() => {
  //   gsap.from(".box",{
  //     x:1000,
  //     duration: 1,
  //     delay:0.2,
  //     rotate: 360
  //   })
  // })

  // 2nd way of writing react using useRef hook

  // const boxRef = useRef()
  // useGSAP(() => {
  //   gsap.from(boxRef.current,{
  //     x:500,
  //     scale: 0,
  //     opacity: 0,
  //     duration: 1,
  //     delay:0.5,
  //     rotate: 360
  //   })
  // })

  // Another way of writing GSAP using useRef, is by using "Scope"

  // const container = useRef()
  // useGSAP(() => {
  //   gsap.to(".box2",{
  //     x:0,
  //     duration:1,
  //     delay: 1,
  //     rotate:720
  //   },{scope:container})
  // })

  const [myCircle, setmyCircle] = useState(0)
  const random = gsap.utils.random(-500,500,10)
  useGSAP(() => {
    gsap.to(".circle",{
      x: myCircle,
      dutaion: 0.5,
      rotate: 360
    })
  },[myCircle])
  

  return (
   <main>
    {/* <div ref = {boxRef} className="box"></div> */}
    {/* <div ref = {container} className='box2'></div> */}
    <br />
    <div onClick = {() => {
      setmyCircle(random)
    }} className='button'>Animate</div>
    <div className="circle">  
    </div>
   </main>
  )
}

