import { BoltedConnectionsSection } from '@/components/sections/bolted-connections-section'
import { FooterSection } from '@/components/sections/footer-section'
import { HeroSection } from '@/components/sections/hero-section'
import { NonBuiltUpColumnsSection } from '@/components/sections/non-built-up-columns-section'
import { WeldedConnectionsSection } from '@/components/sections/welded-connections-section'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
	return (
		<main>
			<HeroSection />
			<BoltedConnectionsSection />
			<Separator />
			<NonBuiltUpColumnsSection />
			<Separator />
			<WeldedConnectionsSection />
			<FooterSection />
		</main>
	)
}
