import { BoltedConnectionsSection } from '@/components/sections/bolted-connections'
import { IntroSection } from '@/components/sections/intro'
import { NonBuiltUpColumnsSection } from '@/components/sections/non-built-up-columns'
import { WeldedConnectionsSection } from '@/components/sections/welded-connections'

export default function HomePage() {
	return (
		<main>
			<IntroSection />
			<BoltedConnectionsSection />
			<WeldedConnectionsSection />
			<NonBuiltUpColumnsSection />
		</main>
	)
}
