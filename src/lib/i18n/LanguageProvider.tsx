import { ClientLanguageProvider } from "@/lib/i18n/ClientLanguageProvider"
import { setLanguageTag, languageTag } from "@/paraglide/runtime"
import { headers } from "next/headers"

setLanguageTag(() => {
	return headers().get("x-language-tag") as any
})

export default function LanguageProvider(props: { children: React.ReactNode }) {
	return (
		<>
			<ClientLanguageProvider language={languageTag()} />
			{props.children}
		</>
	)
}