import { atom } from 'jotai'

import { type inputType } from '@/lib/schemas/nscp-2001-code-provisions'

export const inputAtom = atom<inputType>({
	Fy: 0,
	A: 0,
	L: 0,
	supportsMidspan: false,
	recommendedOrTheoretical: 'recommended',
	effectiveLengthFactor: 'fixed-fixed',
	Ix: 0,
	Iy: 0
})

const IxAtom = atom((get) => get(inputAtom).Ix * 10 ** 6)
const IyAtom = atom((get) => get(inputAtom).Iy * 10 ** 6)

const LAtom = atom((get) => {
	const { L, supportsMidspan } = get(inputAtom)
	return {
		Lx: L,
		Ly: supportsMidspan ? L / 2 : L
	}
})

const KValuesAtom = atom((get) => {
	const { recommendedOrTheoretical, effectiveLengthFactor } = get(inputAtom)
	const kValues = {
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
	const kValueCategory = kValues[recommendedOrTheoretical] || {}
	return kValueCategory[effectiveLengthFactor] ?? { Kx: 1.0, Ky: 1.0 }
})

export const calculatedAtoms = atom((get) => {
	const Rx = parseFloat(Math.sqrt(get(IxAtom) / get(inputAtom).A).toFixed(3))
	const Ry = parseFloat(Math.sqrt(get(IyAtom) / get(inputAtom).A).toFixed(3))
	const rMin = parseFloat(Math.min(Rx, Ry).toFixed(3))
	const Cc = parseFloat(Math.sqrt((Math.PI ** 2 * (4 * 10 ** 5)) / get(inputAtom).Fy).toFixed(3))
	const SRx = parseFloat(((get(KValuesAtom).Kx * get(LAtom).Lx) / Rx).toFixed(3))
	const SRy = parseFloat(((get(KValuesAtom).Ky * get(LAtom).Ly) / Ry).toFixed(3))
	const SRmax = parseFloat(Math.max(SRx, SRy).toFixed(3))
	const ColumnType = Number.isNaN(SRmax) ? 'None' : SRmax > Cc ? 'Long' : 'Intermediate'

	const Fs =
		ColumnType === 'Long' ? -1 : parseFloat((5 / 3 + (3 / 8) * (SRmax / Cc) - SRmax ** 3 / (8 * Cc ** 3)).toFixed(3))
	const AllowableStress =
		ColumnType === 'Intermediate'
			? parseFloat(((1 - SRmax ** 2 / (2 * Cc ** 2)) * (get(inputAtom).Fy / Fs)).toFixed(3))
			: parseFloat(((12 * Math.PI ** 2 * 200000) / (23 * SRmax ** 2)).toFixed(3))
	const AllowableCapacity = parseFloat(((AllowableStress * get(inputAtom).A) / 1000).toFixed(3))

	return {
		Rx,
		Ry,
		rMin,
		Cc,
		SRx,
		SRy,
		SRmax,
		ColumnType,
		Fs,
		AllowableStress,
		AllowableCapacity
	}
})
