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
