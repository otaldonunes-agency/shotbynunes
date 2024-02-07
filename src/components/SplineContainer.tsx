"use client"
import Spline from '@splinetool/react-spline';

export interface SplineContainerInterface {
  scene: string,
  className: string
}

export const SplineContainer = ({scene, ...rest}: SplineContainerInterface ) => {

  return <Spline scene={scene} {...rest}/>
}