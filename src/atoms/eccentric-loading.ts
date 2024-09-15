import { atom } from 'jotai'

import { type inputType } from '@/lib/schemas/eccentric-loading'

export const inputAtom = atom<inputType>({
	Fx: 0,
	Fy: 0,
	La: 0,
	Lb: 0,
	x: 0,
	tp: 0
})

export const calculatedAtoms = atom((get) => {
	const Lt = parseFloat((Number(get(inputAtom).La) + 2 * Number(get(inputAtom).Lb)).toFixed(3))
	const xBar = parseFloat((get(inputAtom).Lb ** 2 / Lt).toFixed(3))
	const yBar = parseFloat((get(inputAtom).La / 2).toFixed(3))

	const ex = get(inputAtom).Lb + get(inputAtom).x - xBar
	const ey = yBar

	const T = parseFloat((get(inputAtom).Fx * ey + get(inputAtom).Fy * ex).toFixed(3))
	const J = parseFloat(
		(
			get(inputAtom).La * (get(inputAtom).La ** 2 / 12 + xBar ** 2) +
			get(inputAtom).Lb * (get(inputAtom).Lb ** 2 / 12 + (get(inputAtom).Lb / 2 - xBar) ** 2 + yBar ** 2) * 2
		).toFixed(3)
	)

	const PTx1 = parseFloat(((T * yBar) / J).toFixed(3))
	const PTx2 = parseFloat(((T * yBar) / J).toFixed(3))
	const PTx3 = parseFloat(((T * yBar) / J).toFixed(3))
	const PTx4 = parseFloat(((T * yBar) / J).toFixed(3))

	const PTy1 = parseFloat(((T * (get(inputAtom).Lb - xBar)) / J).toFixed(3))
	const PTy2 = parseFloat(((T * (get(inputAtom).Lb - xBar)) / J).toFixed(3))
	const PTy3 = parseFloat(((T * xBar) / J).toFixed(3))
	const PTy4 = parseFloat(((T * xBar) / J).toFixed(3))

	const PDx = parseFloat((get(inputAtom).Fx / Lt).toFixed(3))
	const PDy = parseFloat((get(inputAtom).Fy / Lt).toFixed(3))

	const Px1 = parseFloat((-1 * PTx1 - PDx).toFixed(3))
	const Px2 = parseFloat((PTx2 - PDx).toFixed(3))
	const Px3 = parseFloat((PTx3 - PDx).toFixed(3))
	const Px4 = parseFloat((-1 * PTx4 - PDx).toFixed(3))

	const Py1 = parseFloat((PTy1 + PDy).toFixed(3))
	const Py2 = parseFloat((PTy2 + PDy).toFixed(3))
	const Py3 = parseFloat((-1 * PTy3 + PDy).toFixed(3))
	const Py4 = parseFloat((-1 * PTy4 + PDy).toFixed(3))

	const P1 = parseFloat(Math.sqrt(Px1 ** 2 + Py1 ** 2).toFixed(3))
	const P2 = parseFloat(Math.sqrt(Px2 ** 2 + Py2 ** 2).toFixed(3))
	const P3 = parseFloat(Math.sqrt(Px3 ** 2 + Py3 ** 2).toFixed(3))
	const P4 = parseFloat(Math.sqrt(Px4 ** 2 + Py4 ** 2).toFixed(3))

	const tw = get(inputAtom).tp >= 6 ? parseFloat((get(inputAtom).tp - 1.6).toFixed(3)) : get(inputAtom).tp

	const fv1 = parseFloat((P1 / (0.707 * tw)).toFixed(3))
	const fv2 = parseFloat((P2 / (0.707 * tw)).toFixed(3))
	const fv3 = parseFloat((P3 / (0.707 * tw)).toFixed(3))
	const fv4 = parseFloat((P4 / (0.707 * tw)).toFixed(3))

	return {
		Lt,
		xBar,
		yBar,
		ex,
		ey,
		T,
		J,
		PTx: { PTx1, PTx2, PTx3, PTx4 },
		PTy: { PTy1, PTy2, PTy3, PTy4 },
		PDx,
		PDy,
		Px: { Px1, Px2, Px3, Px4 },
		Py: { Py1, Py2, Py3, Py4 },
		P: { P1, P2, P3, P4 },
		tw,
		fv: { fv1, fv2, fv3, fv4 }
	}
})
