import { useSectionInView } from '@/lib/hooks'

const WeldedConnectionsSection = () => {
	// const { ref } = useSectionInView('#welded-connections')

	return (
		<section
			// ref={ref}
			id="welded-connections"
			className="h-screen bg-[#050506]"
		>
			<h1>Welded Connections Section</h1>
		</section>
	)
}

export { WeldedConnectionsSection }
