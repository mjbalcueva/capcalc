'use client'

import { useSectionInView } from '@/lib/hooks'

const WeldedConnectionsSection = () => {
	const { ref } = useSectionInView('#welded-connections')

	return (
		<section
			ref={ref}
			id="welded-connections"
			className="h-screen bg-[#f1f2f4] dark:bg-[#09090b]"
		>
			<h1>Welded Connections Section</h1>
		</section>
	)
}

export { WeldedConnectionsSection }
