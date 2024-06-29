import { InputSection } from './_components/input-section'
import { OutputSection } from './_components/output-section'

export default function NSCP_2001_CodeProvisionsPage() {
	return (
		<main className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]">
			<InputSection />
			<OutputSection />
		</main>
	)
}
