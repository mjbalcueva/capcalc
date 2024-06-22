'use client'

import { useSectionInView } from '@/lib/hooks'

const WeldedConnectionsSection = () => {
	const { ref } = useSectionInView('#welded-connections')

	return (
		<section
			ref={ref}
			id="welded-connections"
			className="h-screen bg-background"
		>
			<h1>Welded Connections Section</h1>
		</section>
	)
}

export { WeldedConnectionsSection }
