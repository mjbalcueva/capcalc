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

const calculateUpdatedI = (I: number) => parseFloat((I * 10 ** 6).toFixed(3))

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
	return parseFloat(Math.sqrt(updatedIx / A).toFixed(3))
}

const calculateRy = ({ updatedIy, A }: { updatedIy: number; A: number }) => {
	return parseFloat(Math.sqrt(updatedIy / A).toFixed(3))
}

const calculateRmin = ({ Rx, Ry }: { Rx: number; Ry: number }) => {
	return parseFloat(Math.min(Rx, Ry).toFixed(3))
}

const calculateCc = ({ Fy }: { Fy: number }) => {
	return parseFloat(Math.sqrt((Math.PI ** 2 * (4 * 10 ** 5)) / Fy).toFixed(3))
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
	return parseFloat(((Kx * Lx) / Rx).toFixed(3))
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
	return parseFloat(((Ky * Ly) / Ry).toFixed(3))
}

const calculateSRmax = ({ SRx, SRy }: { SRx: number; SRy: number }) => {
	return parseFloat(Math.max(SRx, SRy).toFixed(3))
}

const calculateColumnType = ({ SRmax, Cc }: { SRmax: number; Cc: number }) => {
	if (Number.isNaN(SRmax) || Cc == Infinity) return 'None'
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
	if (Number.isNaN(SRmax) || Cc == Infinity) return 0
	if (ColumnType !== 'Intermediate') return -1
	return parseFloat(
		(5 / 3 + (3 / 8) * (SRmax / Cc) - SRmax ** 3 / (8 * Cc ** 3)).toFixed(3)
	)
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
	if (ColumnType === 'Intermediate')
		return parseFloat(((1 - SRmax ** 2 / (2 * Cc ** 2)) * (Fy / Fs)).toFixed(3))
	return parseFloat(
		((12 * Math.PI ** 2 * 200000) / (23 * SRmax ** 2)).toFixed(3)
	)
}

const calculateAllowableCapacity = ({
	AllowableStress,
	A
}: {
	AllowableStress: number
	A: number
}) => {
	return parseFloat(((AllowableStress * A) / 1000).toFixed(3))
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
