import { atom } from 'jotai'

import { type inputType } from '@/lib/schemas/concentric-bolted-connection'

export const inputAtom = atom<inputType>({
	Wg: 0,
	t: 0,
	Fy: 0,
	db: 0,
	n: 0,
	An: 0,
	Fu: 0,
	Fv: 0
})

export const calculatedAtoms = atom((get) => {
	const Ag = parseFloat((get(inputAtom).Wg * get(inputAtom).t).toFixed(3))
	const P1 = parseFloat((0.6 * get(inputAtom).Fy * Ag).toFixed(3))

	const adjustDiameter = (input: number): number => {
		const inputDiameter = Number(input)
		if (inputDiameter === 12) return 14
		if (inputDiameter === 16) return 17
		if (inputDiameter === 20) return 21
		if (inputDiameter === 22) return 24
		if (inputDiameter === 25) return 27
		if (inputDiameter >= 28) return inputDiameter + 1.6
		return 0
	}
	const dh = adjustDiameter(get(inputAtom).db)
	const de = dh + 1.6
	const An = parseFloat(((get(inputAtom).Wg - get(inputAtom).n * de) * get(inputAtom).t).toFixed(3))

	const AgCheck = Ag * 0.85

	// const  = parseFloat(().toFixed(3))
	// get(inputAtom).
	return {
		Ag,
		P1,
		dh,
		de,
		An,
		AgCheck
	}
})
