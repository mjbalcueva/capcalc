'use client'

import { Hero } from '@/components/hero'
import { Meteors } from '@/components/ui/meteors'
import { RetroGrid } from '@/components/ui/retro-grid'

import { useSectionInView } from '@/lib/hooks/useSectionInView'

const HeroSection = () => {
	const { ref } = useSectionInView('#home')

	return (
		<section
			ref={ref}
			id="home"
			className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
		>
			<Hero className="mt-14 flex flex-col items-center justify-center" />
			<Meteors number={14} />
			<RetroGrid className="mt-[30rem] max-h-[calc(100vh-30rem)]" />
		</section>
	)
}

export { HeroSection }
