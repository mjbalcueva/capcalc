import { atom } from 'jotai'

import { type inputType } from '@/lib/schemas/eccentric-bolted-connection'

export const inputAtom = atom<inputType>({
	Fx: 90,
	Fy: 100,
	x1: 100,
	x2: 100,
	y1: 100,
	y2: 100,
	db: 22
})

export const calculatedAtoms = atom((get) => {
	const ex = get(inputAtom).x1 / 2 + get(inputAtom).x2
	const ey = get(inputAtom).y1 / 2 + get(inputAtom).y2

	const T = get(inputAtom).Fx * ey + get(inputAtom).Fy * ex
	const J = get(inputAtom).x1 ** 2 + get(inputAtom).y1 ** 2

	const PTx1 = (T * (get(inputAtom).y1 / 2)) / J
	const PTx2 = (T * (get(inputAtom).y1 / 2)) / J
	const PTx3 = (T * (get(inputAtom).y1 / 2)) / J
	const PTx4 = (T * (get(inputAtom).y1 / 2)) / J

	const PTy1 = (T * (get(inputAtom).x1 / 2)) / J
	const PTy2 = (T * (get(inputAtom).x1 / 2)) / J
	const PTy3 = (T * (get(inputAtom).x1 / 2)) / J
	const PTy4 = (T * (get(inputAtom).x1 / 2)) / J

	const PDx = get(inputAtom).Fx / 4
	const PDy = get(inputAtom).Fy / 4

	const Px1 = -1 * PTx1 - PDx
	const Px2 = PTx2 - PDx
	const Px3 = PTx3 - PDx
	const Px4 = -1 * PTx4 - PDx

	const Py1 = PTy1 + PDy
	const Py2 = PTy2 + PDy
	const Py3 = -1 * PTy3 + PDy
	const Py4 = -1 * PTy4 + PDy

	const P1 = parseFloat(Math.sqrt(Px1 ** 2 + Py1 ** 2).toFixed(3))
	const P2 = parseFloat(Math.sqrt(Px2 ** 2 + Py2 ** 2).toFixed(3))
	const P3 = parseFloat(Math.sqrt(Px3 ** 2 + Py3 ** 2).toFixed(3))
	const P4 = parseFloat(Math.sqrt(Px4 ** 2 + Py4 ** 2).toFixed(3))

	const fv1 = parseFloat(((P1 * 1000) / ((Math.PI / 4) * get(inputAtom).db ** 2)).toFixed(3))
	const fv2 = parseFloat(((P2 * 1000) / ((Math.PI / 4) * get(inputAtom).db ** 2)).toFixed(3))
	const fv3 = parseFloat(((P3 * 1000) / ((Math.PI / 4) * get(inputAtom).db ** 2)).toFixed(3))
	const fv4 = parseFloat(((P4 * 1000) / ((Math.PI / 4) * get(inputAtom).db ** 2)).toFixed(3))

	return {
		ex,
		ey,
		T,
		J,
		PTx: {
			PTx1,
			PTx2,
			PTx3,
			PTx4
		},
		PTy: {
			PTy1,
			PTy2,
			PTy3,
			PTy4
		},
		PDx,
		PDy,
		Px: {
			Px1,
			Px2,
			Px3,
			Px4
		},
		Py: {
			Py1,
			Py2,
			Py3,
			Py4
		},
		P: {
			P1,
			P2,
			P3,
			P4
		},
		fv: {
			fv1,
			fv2,
			fv3,
			fv4
		}
	}
})
