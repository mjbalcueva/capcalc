import { atom } from 'jotai'

import { type inputType } from '@/lib/schemas/eccentric-bolted-connection'

export const inputAtom = atom<inputType>({
	P: 0,
	e: 0,
	L: 0
})

export const calculatedAtoms = atom((get) => {
	const M = parseFloat((get(inputAtom).P * get(inputAtom).e).toFixed(3))
	const C = parseFloat((get(inputAtom).L / 2).toFixed(3))
	const I = parseFloat((get(inputAtom).L ** 3 / 12).toFixed(3))
	const fb = parseFloat(((M * C) / I).toFixed(3))
	const fv = parseFloat((get(inputAtom).P / get(inputAtom).L).toFixed(3))
	const R = parseFloat(Math.sqrt(fb ** 2 + fv ** 2).toFixed(3))

	return {
		M,
		C,
		I,
		fb,
		fv,
		R
	}
})
