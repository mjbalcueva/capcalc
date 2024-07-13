import { atom } from 'jotai'

import { type inputType } from '@/lib/schemas/base-plate'

export const inputAtom = atom<inputType>({
	W: 0,
	H: 0,
	B: 0,
	N: 0,
	t: 0,
	bf: 0,
	d: 0,
	fC: 0,
	fY: 0
})

export const calculatedAtoms = atom((get) => {
	const m = parseFloat(((get(inputAtom).N - 0.95 * get(inputAtom).d) / 2).toFixed(3))
	const n = parseFloat(((get(inputAtom).B - 0.95 * get(inputAtom).bf) / 2).toFixed(3))
	const x = Math.max(m, n)
	const Fb = parseFloat((0.75 * get(inputAtom).fY).toFixed(3))
	const Fp1 = parseFloat(((Fb * get(inputAtom).t ** 2) / (3 * x ** 2)).toFixed(3))
	const P1 = parseFloat((Fp1 * get(inputAtom).B * get(inputAtom).N).toFixed(3))

	const C = parseFloat(((get(inputAtom).B * get(inputAtom).H) / get(inputAtom).N).toFixed(3))
	const A1 = parseFloat((get(inputAtom).B * get(inputAtom).N).toFixed(3))
	const A2 = parseFloat((C * get(inputAtom).H).toFixed(3))
	const Fp2 = parseFloat(
		(0.35 * get(inputAtom).fC * Math.sqrt(A2 / A1) < 0.7 * get(inputAtom).fC
			? 0.35 * get(inputAtom).fC * Math.sqrt(A2 / A1)
			: 0.7 * get(inputAtom).fC
		).toFixed(3)
	)
	const P2 = parseFloat(((Fp2 * get(inputAtom).B * get(inputAtom).N) / 1000).toFixed(3))

	return {
		m,
		n,
		x,
		Fb,
		Fp1,
		P1,

		C,
		A1,
		A2,
		Fp2,
		P2
	}
})
