"use client";
import { GTMProvider } from "@/lib/google/gtm/GoogleTagManager";
import { ProgressBar } from "@/lib/progressBar/ProgressBar";
import { SmoothScroll } from "@/lib/smoothScroll/SmoothScroll";
import { languageTag } from "@/paraglide/runtime";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Arimo } from "next/font/google";
import localFont from "next/font/local";

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
});

const basement = localFont({
  src: "../fonts/BasementGrotesque.otf",
  display: "swap",
  variable: "--font-basement",
});

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <html lang={languageTag()} className="dark">
      <body
        className={`${arimo.className} ${arimo.variable} ${basement.className} ${basement.variable}`}
      >
        <SmoothScroll>
          <NextUIProvider navigate={router.push}>
            <ProgressBar showSpinner={false} />
            {children}
            <GTMProvider gtmId={process.env.GTM_ID || "GTM-ID"} />
          </NextUIProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
