"use client"
import React, { ReactNode, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useWindowSize } from "@studio-freight/hamo"

export interface ParallaxInterface  { 
  className: string,
  children : ReactNode,
  speed?: number,
  id?: string
}

export const Parallax = ({className, children, speed = 2, id="parallax"}: ParallaxInterface) => {
  const trigger = useRef()
  const target = useRef()
  const timeline = useRef()

  const {width: windowWidth} = useWindowSize();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const y = windowWidth * speed * 0.1;
    const setY = gsap.quickSetter(target.current, "y", "px");

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (e) => (
          setY(e.progress * y)
        )
      }
    })

    return () => {
      timeline?.current?.kill()
    }
  }, [id, speed, windowWidth])

return (
  <div ref={trigger} className={className}>
    <div ref={target}>
      {children}
    </div>
  </div>
)
}