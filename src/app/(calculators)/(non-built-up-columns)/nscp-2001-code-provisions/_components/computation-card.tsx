'use client'

import { Calculator } from '@/components/calculator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useNSCP2001CodeProvisionStore } from '@/store/nscp2001CodeProvisionStore'

const ComputationCard = () => {
	const { values } = useNSCP2001CodeProvisionStore()

	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 sm:grid-cols-2 sm:gap-8">
				<div className="flex flex-col space-y-4">
					<Calculator.Output
						value={values.Rx || 0}
						label="Radius of Gyration (Rx)"
					/>
					<Calculator.Output
						value={values.Ry || 0}
						label="Radius of Gyration (Ry)"
					/>
					<Calculator.Output value={values.rMin || 0} label="Minimum (Rmin)" />
					<Calculator.Output value={values.Cc || 0} label="Critical (SR)" />
				</div>
				<div className="flex flex-col space-y-4">
					<Calculator.Output
						value={values.SRx || 0}
						label="Slenderness Ratio (SRx)"
					/>
					<Calculator.Output
						value={values.SRy || 0}
						label="Slenderess Ratio (SRy)"
					/>
					<Calculator.Output
						value={values.SRmax || 0}
						label="Maximum (SRmax)"
					/>
					<Calculator.Output
						value={values.ColumnType || 'None'}
						label="Column Type"
					/>
					<Calculator.Output
						value={values.Fs == -1 ? 'N/A' : values.Fs || 0}
						label="Factor of Safety"
					/>
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }
