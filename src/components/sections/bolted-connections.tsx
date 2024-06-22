'use client'

import { useSectionInView } from '@/lib/hooks'

const BoltedConnectionsSection = () => {
	const { ref } = useSectionInView('#bolted-connections')

	return (
		<section
			ref={ref}
			id="bolted-connections"
			className="h-screen bg-white dark:bg-[#050506]"
		>
			<h1>Bolted Connections Section</h1>
		</section>
	)
}

export { BoltedConnectionsSection }
