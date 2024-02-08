'use client'
import { GTMProvider } from "@/lib/google/gtm/GoogleTagManager";
import { ProgressBar } from "@/lib/progressBar/ProgressBar";
import { SmoothScroll } from "@/lib/smoothScroll/SmoothScroll";
import LanguageProvider from "@/lib/i18n/LanguageProvider";
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <SmoothScroll>
      <LanguageProvider>
        <NextUIProvider navigate={router.push}>
          <ProgressBar showSpinner={false} />
          {children}
          <GTMProvider gtmId={process.env.GTM_ID || "GTM-ID"} />
        </NextUIProvider>
      </LanguageProvider>
    </SmoothScroll>
  )
}