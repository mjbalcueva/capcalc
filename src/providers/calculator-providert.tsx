'use client'

import React, { createContext, useContext, useState } from 'react'

type CalculatorState = {
	Rx: number
	Ry: number
	rMin: number
	Cc: number
	SRx: number
	SRy: number
	SRMax: number
	ColumnType: 'Intermediate' | 'Long'
	Fs: number | string
	AllowableStress: number
	AllowableCapacity: number
}

type CalculatorContextType = {
	state: CalculatorState
	setState: (state: CalculatorState) => void
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(
	undefined
)

const useCalculatorContext = () => {
	const context = useContext(CalculatorContext)
	if (context === undefined) {
		throw new Error(
			'useCalculatorContext must be used within a CalculatorProvider'
		)
	}
	return context
}

const CalculatorProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, setState] = useState<CalculatorState>({
		Rx: 0,
		Ry: 0,
		rMin: 0,
		Cc: 0,
		SRx: 0,
		SRy: 0,
		SRMax: 0,
		ColumnType: 'Intermediate',
		Fs: 0,
		AllowableStress: 0,
		AllowableCapacity: 0
	})

	return (
		<CalculatorContext.Provider value={{ state, setState }}>
			{children}
		</CalculatorContext.Provider>
	)
}

export { CalculatorProvider, useCalculatorContext }
