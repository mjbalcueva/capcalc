'use client'

import { useSectionInView } from '@/lib/hooks'

const NonBuiltUpColumnsSection = () => {
	const { ref } = useSectionInView('#non-built-up-columns')

	return (
		<section
			ref={ref}
			id="non-built-up-columns"
			className="flex h-screen items-center justify-center bg-white dark:bg-[#050506]"
		>
			<div className="container grid w-full gap-4 border md:grid-cols-2">
				<h1>Non-Built Up Section</h1>
				<h1>Non-Built Up Section</h1>
			</div>
		</section>
	)
}

export { NonBuiltUpColumnsSection }
