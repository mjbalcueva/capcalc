import { atom } from 'jotai'

import { type inputType } from '@/lib/schemas/balanced-weld-group'

export const inputAtom = atom<inputType>({
	useMaximumSize: false,
	tp: 0,
	useUltimateStress: false,
	Fv: 0,
	La: 0,
	Lb: 0,
	Lc: 0
})

export const calculatedAtoms = atom((get) => {
	const Tw = get(inputAtom).useMaximumSize
		? get(inputAtom).tp
		: get(inputAtom).tp >= 6
			? parseFloat((get(inputAtom).tp - 1.6).toFixed(3))
			: get(inputAtom).tp

	const Fv = get(inputAtom).useUltimateStress ? parseFloat((0.3 * get(inputAtom).Fv).toFixed(3)) : get(inputAtom).Fv

	const Lt = Number(get(inputAtom).La) + Number(get(inputAtom).Lb) + Number(get(inputAtom).Lc)

	const T = parseFloat((0.707 * Tw * Lt * Fv).toFixed(3))

	return {
		Tw,
		Lt,
		Fv,
		T
	}
})
