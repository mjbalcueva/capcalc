import { HeroSection } from '@/components/hero-section'
import { Meteors } from '@/components/ui/meteors'
import { RetroGrid } from '@/components/ui/retro-grid'
import { useSectionInView } from '@/lib/hooks'

const IntroSection = () => {
	// const { ref } = useSectionInView('#home')

	return (
		<section
			// ref={ref}
			id="home"
			className="relative flex h-screen w-full scroll-mt-[100rem] flex-col items-center justify-center overflow-hidden"
		>
			<HeroSection className="flex flex-col items-center justify-center" />
			<Meteors number={14} />
			<RetroGrid className="mt-[30rem] max-h-[calc(100vh-30rem)]" />
		</section>
	)
}

export { IntroSection }
