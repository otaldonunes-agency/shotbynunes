'use client'
import { GTMProvider } from "@/components/GoogleTagManager";
import { ProgressBar } from "@/components/ProgressBar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <SmoothScroll>
      <NextUIProvider navigate={router.push}>
        <ProgressBar showSpinner={false} />
        {children}
        <GTMProvider gtmId={process.env.GTM_ID || "GTM-ID"} />
      </NextUIProvider>
    </SmoothScroll>
  )
}