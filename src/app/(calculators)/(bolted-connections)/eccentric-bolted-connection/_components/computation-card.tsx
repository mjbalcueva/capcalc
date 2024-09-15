'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/eccentric-bolted-connection'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const ComputationCard = () => {
	const [values] = useAtom(calculatedAtoms)

	const eccentricity = [
		{ label: 'Eccentricity along x-axis', variable: 'ex', value: values.ex, unit: 'mm' },
		{ label: 'Eccentricity along y-axis', variable: 'ey', value: values.ey, unit: 'mm' }
	]

	const torque = [{ label: 'Torque', variable: 'T', value: values.T, unit: 'kN-mm' }]

	const polarMomentOfInertia = [{ label: 'Polar Moment of Inertia', variable: 'J', value: values.J, unit: 'mm⁴' }]

	const loadDueToTorque = [
		{ label: 'Load Due to Torque (x-direction)', variable: '1', value: values.PTx.PTx1, unit: 'kN' },
		{ label: 'Load Due to Torque (x-direction)', variable: '2', value: values.PTx.PTx2, unit: 'kN' },
		{ label: 'Load Due to Torque (x-direction)', variable: '3', value: values.PTx.PTx3, unit: 'kN' },
		{ label: 'Load Due to Torque (x-direction)', variable: '4', value: values.PTx.PTx4, unit: 'kN' }
	]

	const loadDueToTorqueY = [
		{ label: 'Load Due to Torque (y-direction)', variable: '1', value: values.PTy.PTy1, unit: 'kN' },
		{ label: 'Load Due to Torque (y-direction)', variable: '2', value: values.PTy.PTy2, unit: 'kN' },
		{ label: 'Load Due to Torque (y-direction)', variable: '3', value: values.PTy.PTy3, unit: 'kN' },
		{ label: 'Load Due to Torque (y-direction)', variable: '4', value: values.PTy.PTy4, unit: 'kN' }
	]

	const directLoad = [
		{ label: 'Direct Load (x-direction)', variable: 'All bolts', value: values.PDx, unit: 'kN' },
		{ label: 'Direct Load (y-direction)', variable: 'All bolts', value: values.PDy, unit: 'kN' }
	]

	const loadAlongX = [
		{ label: 'Load Along x-axis', variable: '1', value: values.Px.Px1, unit: 'kN' },
		{ label: 'Load Along x-axis', variable: '2', value: values.Px.Px2, unit: 'kN' },
		{ label: 'Load Along x-axis', variable: '3', value: values.Px.Px3, unit: 'kN' },
		{ label: 'Load Along x-axis', variable: '4', value: values.Px.Px4, unit: 'kN' }
	]

	const loadAlongY = [
		{ label: 'Load Along y-axis', variable: '1', value: values.Py.Py1, unit: 'kN' },
		{ label: 'Load Along y-axis', variable: '2', value: values.Py.Py2, unit: 'kN' },
		{ label: 'Load Along y-axis', variable: '3', value: values.Py.Py3, unit: 'kN' },
		{ label: 'Load Along y-axis', variable: '4', value: values.Py.Py4, unit: 'kN' }
	]

	const totalLoad = [
		{ label: 'Total Load', variable: '1', value: values.P.P1, unit: 'kN' },
		{ label: 'Total Load', variable: '2', value: values.P.P2, unit: 'kN' },
		{ label: 'Total Load', variable: '3', value: values.P.P3, unit: 'kN' },
		{ label: 'Total Load', variable: '4', value: values.P.P4, unit: 'kN' }
	]

	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
			</CardHeader>

			<CardContent className="space-y-4">
				<ComputationTable data={eccentricity} />
				<ComputationTable data={torque} />
				<ComputationTable data={polarMomentOfInertia} />
				<ComputationTable isBolt data={loadDueToTorque} />
				<ComputationTable isBolt data={loadDueToTorqueY} />
				<ComputationTable isBolt data={directLoad} />
				<ComputationTable isBolt data={loadAlongX} />
				<ComputationTable isBolt data={loadAlongY} />
				<ComputationTable isBolt data={totalLoad} />
			</CardContent>
		</Card>
	)
}

const ComputationTable = ({
	isBolt,
	data
}: {
	isBolt?: boolean
	data: { label: string; variable: string; value: number; unit: string }[]
}) => {
	return (
		<Table className="rounded-xl border border-border">
			<TableHeader className="bg-muted text-muted-foreground">
				<TableRow>
					<TableHead>Label</TableHead>
					<TableHead>{isBolt ? 'Bolt' : 'Variable'}</TableHead>
					<TableHead className="w-[130px]">Value</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((item, index) => (
					<TableRow key={index} className="font-medium">
						<TableCell className="font-medium">{item.label}</TableCell>
						<TableCell className="w-1/4 font-normal">{item.variable}</TableCell>
						<TableCell className="flex w-[130px] justify-end text-right font-normal">
							<span>{item.value}</span>
							<span className="flex-grow text-muted-foreground">{item.unit}</span>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export { ComputationCard }
