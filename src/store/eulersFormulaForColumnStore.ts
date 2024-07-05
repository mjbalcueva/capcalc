import { create } from 'zustand'

type EulersFormulaForColumnType = {
	values: {
		Rx: number
		Ry: number
		rMin: number
		SRx: number
		SRy: number
		SRmax: number
		AllowableStress: number
		AllowableCapacity: number
	}
	setValues: (values: EulersFormulaForColumnType['values']) => void
	resetValues: () => void
}

export const useEulersFormulaForColumnStore =
	create<EulersFormulaForColumnType>((set) => ({
		values: {
			Rx: 0,
			Ry: 0,
			rMin: 0,
			Cc: 0,
			SRx: 0,
			SRy: 0,
			SRmax: 0,
			ColumnType: 'None',
			Fs: 0,
			AllowableStress: 0,
			AllowableCapacity: 0
		},
		setValues: (values) => set({ values }),
		resetValues: () =>
			set({
				values: {
					Rx: 0,
					Ry: 0,
					rMin: 0,
					SRx: 0,
					SRy: 0,
					SRmax: 0,
					AllowableStress: 0,
					AllowableCapacity: 0
				}
			})
	}))
