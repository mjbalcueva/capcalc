'use client'

import { useSectionInView } from '@/lib/hooks'

const NonBuiltUpColumnsSection = () => {
	const { ref } = useSectionInView('#non-built-up-columns')

	return (
		<section
			ref={ref}
			id="non-built-up-columns"
			className="h-screen bg-white dark:bg-[#050506]"
		>
			<h1>Non-Built Up Section</h1>
		</section>
	)
}

export { NonBuiltUpColumnsSection }
