'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/eccentric-loading'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormOutput } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'

const ComputationCard = () => {
	const [values] = useAtom(calculatedAtoms)
	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
			</CardHeader>

			<Separator />

			<CardContent>
				<CardTitle className="py-4">Shearing Stress</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="Shearing Stress" symbol="fv 1">
							{!isFinite(values.fv.fv1) ? 0 : values.fv.fv1 || 0}
						</FormOutput>

						<FormOutput label="Shearing Stress" symbol="fv 2">
							{!isFinite(values.fv.fv2) ? 0 : values.fv.fv2 || 0}
						</FormOutput>
					</div>

					<div className="flex flex-col gap-4">
						<FormOutput label="Shearing Stress" symbol="fv 3">
							{!isFinite(values.fv.fv3) ? 0 : values.fv.fv3 || 0}
						</FormOutput>

						<FormOutput label="Shearing Stress" symbol="fv 4">
							{!isFinite(values.fv.fv4) ? 0 : values.fv.fv4 || 0}
						</FormOutput>
					</div>
				</div>

				<CardTitle className="mt-6 py-4">Total Length</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="Total Length" symbol="Lt">
							{!isFinite(values.Lt) ? 0 : values.Lt || 0}
						</FormOutput>
					</div>
				</div>

				<CardTitle className="mt-6 py-4">Center of Gravity</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="X axis" symbol="x̄">
							{!isFinite(values.xBar) ? 0 : values.xBar || 0}
						</FormOutput>
					</div>

					<div className="flex flex-col gap-4">
						<FormOutput label="Y axis" symbol="ȳ">
							{!isFinite(values.yBar) ? 0 : values.yBar || 0}
						</FormOutput>
					</div>
				</div>

				<CardTitle className="mt-6 py-4">Torque and Polar Moment of Inertia</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="Torque" symbol="T">
							{!isFinite(values.T) ? 0 : values.T || 0}
						</FormOutput>
					</div>

					<div className="flex flex-col gap-4">
						<FormOutput label="Polar Moment of Inertia" symbol="J">
							{!isFinite(values.J) ? 0 : values.J || 0}
						</FormOutput>
					</div>
				</div>

				<CardTitle className="mt-6 py-4">Load Due to Torque at X Component</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="Load X 1" symbol="PTx1">
							{!isFinite(values.PTx.PTx1) ? 0 : values.PTx.PTx1 || 0}
						</FormOutput>

						<FormOutput label="Load X 2" symbol="PTx2">
							{!isFinite(values.PTx.PTx2) ? 0 : values.PTx.PTx2 || 0}
						</FormOutput>
					</div>

					<div className="flex flex-col gap-4">
						<FormOutput label="Load X 3" symbol="PTx3">
							{!isFinite(values.PTx.PTx3) ? 0 : values.PTx.PTx3 || 0}
						</FormOutput>

						<FormOutput label="Load X 4" symbol="PTx4">
							{!isFinite(values.PTx.PTx4) ? 0 : values.PTx.PTx4 || 0}
						</FormOutput>
					</div>
				</div>

				<CardTitle className="mt-6 py-4">Load Due to Torque at Y Component</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="Load Y 1" symbol="PTy1">
							{!isFinite(values.PTy.PTy1) ? 0 : values.PTy.PTy1 || 0}
						</FormOutput>

						<FormOutput label="Load Y 2" symbol="PTy2">
							{!isFinite(values.PTy.PTy2) ? 0 : values.PTy.PTy2 || 0}
						</FormOutput>
					</div>

					<div className="flex flex-col gap-4">
						<FormOutput label="Load Y 3" symbol="PTy3">
							{!isFinite(values.PTy.PTy3) ? 0 : values.PTy.PTy3 || 0}
						</FormOutput>

						<FormOutput label="Load Y 4" symbol="PTy4">
							{!isFinite(values.PTy.PTy4) ? 0 : values.PTy.PTy4 || 0}
						</FormOutput>
					</div>
				</div>

				<CardTitle className="mt-6 py-4">Direct Load</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="At X" symbol="PDx">
							{!isFinite(values.PDx) ? 0 : values.PDx || 0}
						</FormOutput>
					</div>

					<div className="flex flex-col gap-4">
						<FormOutput label="At Y" symbol="PDy">
							{!isFinite(values.PDy) ? 0 : values.PDy || 0}
						</FormOutput>
					</div>
				</div>

				<CardTitle className="mt-6 py-4">Load at X Axis</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="Load X 1" symbol="Px1">
							{!isFinite(values.Px.Px1) ? 0 : values.Px.Px1 || 0}
						</FormOutput>

						<FormOutput label="Load X 2" symbol="Px2">
							{!isFinite(values.Px.Px2) ? 0 : values.Px.Px2 || 0}
						</FormOutput>
					</div>

					<div className="flex flex-col gap-4">
						<FormOutput label="Load X 3" symbol="Px3">
							{!isFinite(values.Px.Px3) ? 0 : values.Px.Px3 || 0}
						</FormOutput>

						<FormOutput label="Load X 4" symbol="Px4">
							{!isFinite(values.Px.Px4) ? 0 : values.Px.Px4 || 0}
						</FormOutput>
					</div>
				</div>

				<CardTitle className="mt-6 py-4">Load at Y Axis</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="Load Y 1" symbol="Py1">
							{!isFinite(values.Py.Py1) ? 0 : values.Py.Py1 || 0}
						</FormOutput>

						<FormOutput label="Load Y 2" symbol="Py2">
							{!isFinite(values.Py.Py2) ? 0 : values.Py.Py2 || 0}
						</FormOutput>
					</div>

					<div className="flex flex-col gap-4">
						<FormOutput label="Load Y 3" symbol="Py3">
							{!isFinite(values.Py.Py3) ? 0 : values.Py.Py3 || 0}
						</FormOutput>

						<FormOutput label="Load Y 4" symbol="Py4">
							{!isFinite(values.Py.Py4) ? 0 : values.Py.Py4 || 0}
						</FormOutput>
					</div>
				</div>

				<CardTitle className="mt-6 py-4">Load</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="Load" symbol="P1">
							{!isFinite(values.P.P1) ? 0 : values.P.P1 || 0}
						</FormOutput>

						<FormOutput label="Load" symbol="P2">
							{!isFinite(values.P.P2) ? 0 : values.P.P2 || 0}
						</FormOutput>
					</div>

					<div className="flex flex-col gap-4">
						<FormOutput label="Load" symbol="P3">
							{!isFinite(values.P.P3) ? 0 : values.P.P3 || 0}
						</FormOutput>

						<FormOutput label="Load" symbol="P4">
							{!isFinite(values.P.P4) ? 0 : values.P.P4 || 0}
						</FormOutput>
					</div>
				</div>

				<CardTitle className="mt-6 py-4">Size of weld</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="Size of weld" symbol="tw">
							{!isFinite(values.tw) ? 0 : values.tw || 0}
						</FormOutput>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }
