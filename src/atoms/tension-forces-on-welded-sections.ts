import { atom } from 'jotai'

import { type inputType } from '@/lib/schemas/tension-forces-on-welded-sections'

export const inputAtom = atom<inputType>({
	typeofTensileCapacity: 'getCapacity',
	Fy: 0,
	Fu: 0,
	Wg: 0,
	t: 0,
	u: 0,
	tp: 0,
	Lv: 0,
	Lt: 0
})

export const calculatedAtoms = atom((get) => {
	const Ag = parseFloat((get(inputAtom).Wg * get(inputAtom).t).toFixed(3))
	const P1 = parseFloat((0.6 * get(inputAtom).Fy * Ag).toFixed(3))

	const An = parseFloat((get(inputAtom).u * Ag).toFixed(3))
	const P2 = parseFloat((0.5 * get(inputAtom).Fu * An).toFixed(3))

	const P = Math.min(P1, P2)

	const Av = parseFloat((get(inputAtom).Lv * get(inputAtom).tp).toFixed(3))
	const At = parseFloat((get(inputAtom).Lt * get(inputAtom).tp).toFixed(3))
	const P3 = parseFloat((0.3 * get(inputAtom).Fu * Av + 0.5 * get(inputAtom).Fu * At).toFixed(3))

	return {
		typeOfTensileCapacityChoices: get(inputAtom).typeofTensileCapacity,
		Ag,
		P1,
		An,
		P2,
		smallestP: P,
		Av,
		At,
		P3
	}
})
