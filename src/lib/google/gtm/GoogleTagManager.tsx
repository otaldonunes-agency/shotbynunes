"use client"
import { GoogleTagManager } from '@next/third-parties/google'

type GTMParams = {
  gtmId: string;
  dataLayer?: string[];
  dataLayerName?: string;
  auth?: string;
  preview?: string;
};

export const GTMProvider = ({...props}: GTMParams) => {
  return <GoogleTagManager {...props} />
  }