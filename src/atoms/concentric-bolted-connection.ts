import { atom } from 'jotai'

import { type inputType } from '@/lib/schemas/concentric-bolted-connection'

export const inputAtom = atom<inputType>({
	typeOfConsideration: 'gross',
	Wg: 0,
	t: 0,
	Fy: 0,
	db: 0,
	N: 0,
	n: 0,
	An: 0,
	Fu: 0,
	Fv: 0,
	typeOfShearing: 'single'
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
	let An = parseFloat(((get(inputAtom).Wg - get(inputAtom).N * de) * get(inputAtom).t).toFixed(3))

	const AgCheck = Ag * 0.85

	if (An >= AgCheck) An = AgCheck

	const P2 = An < AgCheck ? 0.5 * get(inputAtom).Fu * An : 0.5 * get(inputAtom).Fu * AgCheck

	const Av =
		get(inputAtom).typeOfShearing === 'single'
			? parseFloat(((Math.PI / 4) * get(inputAtom).db ** 2 * get(inputAtom).n).toFixed(3))
			: parseFloat(((Math.PI / 4) * get(inputAtom).db ** 2 * get(inputAtom).n * 2).toFixed(3))

	const P3 = parseFloat((get(inputAtom).Fv * Av).toFixed(3))

	const P4 = parseFloat((1.2 * get(inputAtom).Fu * get(inputAtom).db * get(inputAtom).t * get(inputAtom).n).toFixed(3))
	return {
		typeOfConcentricBoltedConnection: get(inputAtom).typeOfConsideration,
		Ag,
		P1,
		dh,
		de,
		An,
		AgCheck,
		P2,
		Av,
		P3,
		P4
	}
})
