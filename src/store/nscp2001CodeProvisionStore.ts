import { create } from 'zustand'

type NSCP2001CodeProvesion = {
	values: {
		Rx: number
		Ry: number
		rMin: number
		Cc: number
		SRx: number
		SRy: number
		SRmax: number
		ColumnType: 'Intermediate' | 'Long' | 'None'
		Fs: number | string
		AllowableStress: number
		AllowableCapacity: number
	}
	setValues: (values: NSCP2001CodeProvesion['values']) => void
	resetValues: () => void
}

export const useNSCP2001CodeProvisionStore = create<NSCP2001CodeProvesion>(
	(set) => ({
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
					Cc: 0,
					SRx: 0,
					SRy: 0,
					SRmax: 0,
					ColumnType: 'None',
					Fs: 0,
					AllowableStress: 0,
					AllowableCapacity: 0
				}
			})
	})
)
