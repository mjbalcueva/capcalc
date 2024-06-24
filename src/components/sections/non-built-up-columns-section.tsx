'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect'
import { useSectionInView } from '@/lib/hooks'
import { nonBuiltUpColumnsItems } from '@/lib/links'

const NonBuiltUpColumnsSection = () => {
	const { ref } = useSectionInView('#non-built-up-columns')

	return (
		<section
			ref={ref}
			id="non-built-up-columns"
			className="relative z-[1] flex min-h-screen items-center justify-center bg-white py-4 dark:bg-[#050506]"
		>
			<div className="grid w-full items-center sm:container lg:grid-cols-2">
				<div className="mx-2.5 flex h-[38.4rem] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white text-center dark:border-white/[0.2] dark:bg-black">
					<h2 className="text-xl font-bold text-card-foreground/75 md:text-4xl">
						Non-Built Up Columns Calculators
					</h2>
					<p className="mx-auto mt-4 max-w-lg text-muted-foreground/90 md:text-lg">
						Explore our suite of calculators designed for non-built up columns,
						which are essential structural elements made from single-piece
						rolled steel sections.
					</p>
				</div>
				<HoverEffect items={nonBuiltUpColumnsItems} />
			</div>
			<div className="absolute top-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[#050506] dark:bg-[radial-gradient(#15181d_1px,transparent_1px)]" />
		</section>
	)
}

export { NonBuiltUpColumnsSection }
