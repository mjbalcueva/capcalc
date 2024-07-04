type KValues = {
	recommended: Record<string, { Kx: number; Ky: number }>
	theoretical: Record<string, { Kx: number; Ky: number }>
}

const kValues: KValues = {
	recommended: {
		'fixed-fixed': { Kx: 0.6, Ky: 0.8 },
		'fixed-pinned': { Kx: 1.0, Ky: 1.0 },
		'pinned-pinned': { Kx: 0.8, Ky: 0.8 }
	},
	theoretical: {
		'fixed-fixed': { Kx: 0.5, Ky: 0.7 },
		'fixed-pinned': { Kx: 1.0, Ky: 1.0 },
		'pinned-pinned': { Kx: 0.7, Ky: 0.7 }
	}
}

const calculateUpdatedI = (I: number) => I * 10 ** 6

const calculateLValues = (L: number, supportsMidspan: boolean) => {
	return {
		Lx: L,
		Ly: supportsMidspan ? L / 2 : L
	}
}

const getKValues = (
	recommendedOrTheoretical: keyof KValues,
	effectiveLengthFactor: string
) => {
	const kValueCategory = kValues[recommendedOrTheoretical] || {}
	return kValueCategory[effectiveLengthFactor] ?? { Kx: 1.0, Ky: 1.0 }
}

const calculateRx = ({ updatedIx, A }: { updatedIx: number; A: number }) => {
	return Math.sqrt(updatedIx / A)
}

const calculateRy = ({ updatedIy, A }: { updatedIy: number; A: number }) => {
	return Math.sqrt(updatedIy / A)
}

const calculateRmin = ({ Rx, Ry }: { Rx: number; Ry: number }) => {
	return Math.min(Rx, Ry)
}

const calculateCc = ({ Fy }: { Fy: number }) => {
	return Math.sqrt((Math.PI ** 2 * (4 * 10 ** 5)) / Fy)
}

const calculateSRx = ({
	Kx,
	Lx,
	Rx
}: {
	Kx: number
	Lx: number
	Rx: number
}) => {
	return (Kx * Lx) / Rx
}

const calculateSRy = ({
	Ky,
	Ly,
	Ry
}: {
	Ky: number
	Ly: number
	Ry: number
}) => {
	return (Ky * Ly) / Ry
}

const calculateSRmax = ({ SRx, SRy }: { SRx: number; SRy: number }) => {
	return Math.max(SRx, SRy)
}

const calculateColumnType = ({ SRmax, Cc }: { SRmax: number; Cc: number }) => {
	return SRmax > Cc ? 'Long' : 'Intermediate'
}

const calculateFs = ({
	ColumnType,
	SRmax,
	Cc
}: {
	ColumnType: string
	SRmax: number
	Cc: number
}) => {
	return ColumnType === 'Intermediate'
		? 5 / 3 + (3 / 8) * (SRmax / Cc) - SRmax ** 3 / (8 * Cc ** 3)
		: -1
}

const calculateAllowableStress = ({
	ColumnType,
	SRmax,
	Cc,
	Fy,
	Fs
}: {
	ColumnType: string
	SRmax: number
	Cc: number
	Fy: number
	Fs: number
}) => {
	if (ColumnType !== 'Intermediate')
		parseFloat(((12 * Math.PI ** 2 * 200000) / (23 * SRmax ** 2)).toFixed(3))
	if (Fs === -1) return -1
	return parseFloat(((1 - SRmax ** 2 / (2 * Cc ** 2)) * (Fy / Fs)).toFixed(3))
}

const calculateAllowableCapacity = ({
	AllowableStress,
	A
}: {
	AllowableStress: number
	A: number
}) => {
	return (AllowableStress * A) / 1000
}

export {
	calculateUpdatedI,
	calculateLValues,
	getKValues,
	calculateRx,
	calculateRy,
	calculateRmin,
	calculateCc,
	calculateSRx,
	calculateSRy,
	calculateSRmax,
	calculateColumnType,
	calculateFs,
	calculateAllowableStress,
	calculateAllowableCapacity
}
