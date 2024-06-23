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
			className="flex h-screen items-center justify-center bg-white dark:bg-[#050506]"
		>
			<div className="container grid w-full gap-4 lg:grid-cols-2">
				<div className="">
					<h1>Non-Built Up Section</h1>
				</div>
				<div className="gap-10">
					<HoverEffect items={nonBuiltUpColumnsItems} />
				</div>
			</div>
		</section>
	)
}

export { NonBuiltUpColumnsSection }
