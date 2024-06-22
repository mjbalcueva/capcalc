import { HeroSection } from '@/components/hero-section'
import { Meteors } from '@/components/ui/meteors'
import { RetroGrid } from '@/components/ui/retro-grid'

export default function HomePage() {
	return (
		<main>
			<div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
				<HeroSection className="flex flex-col items-center justify-center" />
				<Meteors number={14} />
				<RetroGrid className="mt-[30rem] max-h-[calc(100vh-30rem)]" />
			</div>
		</main>
	)
}
