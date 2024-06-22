import { BoltedConnectionsSection } from '@/components/sections/bolted-connections-section'
import { HeroSection } from '@/components/sections/hero-section'
import { NonBuiltUpColumnsSection } from '@/components/sections/non-built-up-columns-section'
import { WeldedConnectionsSection } from '@/components/sections/welded-connections-section'

export default function HomePage() {
	return (
		<main>
			<HeroSection />
			<BoltedConnectionsSection />
			<WeldedConnectionsSection />
			<NonBuiltUpColumnsSection />
		</main>
	)
}
