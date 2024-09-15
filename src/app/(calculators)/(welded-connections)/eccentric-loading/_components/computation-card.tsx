'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/eccentric-loading'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const ComputationCard = () => {
	const [values] = useAtom(calculatedAtoms)

	const eccentricity = [
		{ label: 'Eccentricity along x-axis', variable: 'ex', value: values.ex, unit: 'mm' },
		{ label: 'Eccentricity along y-axis', variable: 'ey', value: values.ey, unit: 'mm' }
	]

	const totalLength = [{ label: 'Total Length', variable: 'Lt', value: values.Lt, unit: 'mm' }]

	const centerOfGravity = [
		{ label: 'Center of Gravity (X axis)', variable: 'xBar', value: values.xBar, unit: 'mm' },
		{ label: 'Center of Gravity (Y axis)', variable: 'yBar', value: values.yBar, unit: 'mm' }
	]

	const torque = [{ label: 'Torque', variable: 'T', value: values.T, unit: 'kN-mm' }]

	const polarMomentOfInertia = [{ label: 'Polar Moment of Inertia', variable: 'J', value: values.J, unit: 'mm⁴' }]

	const sizeOfWeld = [{ label: 'Size of weld', variable: 'tw', value: values.tw, unit: 'mm' }]

	const customTable = [
		{
			label: 'Load Due to Torque (x-direction)',
			bolt1: values.PTx.PTx1,
			bolt2: values.PTx.PTx2,
			bolt3: values.PTx.PTx3,
			bolt4: values.PTx.PTx4,
			unit: 'kN'
		},
		{
			label: 'Load Due to Torque (y-direction)',
			bolt1: values.PTy.PTy1,
			bolt2: values.PTy.PTy2,
			bolt3: values.PTy.PTy3,
			bolt4: values.PTy.PTy4,
			unit: 'kN'
		},
		{
			label: 'Direct Load (x-direction)',
			bolt1: values.PDx,
			bolt2: values.PDx,
			bolt3: values.PDx,
			bolt4: values.PDx,
			unit: 'kN'
		},
		{
			label: 'Direct Load (y-direction)',
			bolt1: values.PDy,
			bolt2: values.PDy,
			bolt3: values.PDy,
			bolt4: values.PDy,
			unit: 'kN'
		},
		{
			label: 'Load X Axis',
			bolt1: values.Px.Px1,
			bolt2: values.Px.Px2,
			bolt3: values.Px.Px3,
			bolt4: values.Px.Px4,
			unit: 'kN'
		},
		{
			label: 'Load Y Axis',
			bolt1: values.Py.Py1,
			bolt2: values.Py.Py2,
			bolt3: values.Py.Py3,
			bolt4: values.Py.Py4,
			unit: 'kN'
		},
		{
			label: 'Total Load',
			bolt1: values.P.P1,
			bolt2: values.P.P2,
			bolt3: values.P.P3,
			bolt4: values.P.P4,
			unit: 'kN'
		}
	]
	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
			</CardHeader>

			<CardContent className="space-y-6">
				<ComputationTable data={eccentricity} />
				<ComputationTable data={totalLength} />
				<ComputationTable data={centerOfGravity} />
				<ComputationTable data={torque} />
				<ComputationTable data={polarMomentOfInertia} />
				<ComputationTable data={sizeOfWeld} />
				<ComputationTableCustom data={customTable} />
			</CardContent>
		</Card>
	)
}

const ComputationTableCustom = ({
	data
}: {
	data: { label: string; bolt1: number; bolt2: number; bolt3: number; bolt4: number; unit: string }[]
}) => {
	return (
		<Table className="rounded-xl border border-border">
			<TableHeader className="bg-muted text-muted-foreground">
				<TableRow>
					<TableHead></TableHead>
					<TableHead className="text-right font-normal">Bolt 1</TableHead>
					<TableHead className="text-right font-normal">Bolt 2</TableHead>
					<TableHead className="text-right font-normal">Bolt 3</TableHead>
					<TableHead className="text-right font-normal">Bolt 4</TableHead>
					<TableHead className="w-[40px]"></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((item, index) => (
					<TableRow key={index} className="font-medium">
						<TableCell className="font-medium">{item.label}</TableCell>
						<TableCell className="text-right font-normal">{item.bolt1 || 0}</TableCell>
						<TableCell className="text-right font-normal">{item.bolt2 || 0}</TableCell>
						<TableCell className="text-right font-normal">{item.bolt3 || 0}</TableCell>
						<TableCell className="text-right font-normal">{item.bolt4 || 0}</TableCell>
						<TableCell className="w-[40px] text-right font-normal text-muted-foreground">{item.unit}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
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
							<span>{item.value || 0}</span>
							<span className="flex-grow text-muted-foreground">{item.unit}</span>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export { ComputationCard }
