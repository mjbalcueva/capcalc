type CalculatorState = {
	Rx: number
	Ry: number
	rMin: number
	Cc: number
	SRx: number
	SRy: number
	SRmax: number
	ColumnType: 'Intermediate' | 'Long'
	Fs: number | string
	AllowableStress: number
	AllowableCapacity: number
}

export { type CalculatorState }
