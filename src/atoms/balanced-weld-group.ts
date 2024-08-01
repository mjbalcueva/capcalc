import { atom } from 'jotai'

import { type inputType } from '@/lib/schemas/balanced-weld-group'

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

	return {
		Ag,
		P1
	}
})
