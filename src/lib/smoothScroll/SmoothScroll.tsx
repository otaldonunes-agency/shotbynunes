"use client"
import {ReactLenis, useLenis} from '@studio-freight/react-lenis'

export const SmoothScroll = ({children}: React.PropsWithChildren<{}>) => {
return <ReactLenis
root
options={{
  lerp: 0.1,
  duration: 2000,
  smoothTouch: true,
}}>
    {children}
  </ReactLenis>
}
