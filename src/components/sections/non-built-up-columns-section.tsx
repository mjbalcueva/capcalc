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
			className="bg-white dark:bg-[#050506]"
		>
			<div className="grid w-full items-center gap-4 sm:container lg:grid-cols-2">
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
