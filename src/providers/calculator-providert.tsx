'use client'

import React, { createContext, useContext, useState } from 'react'

// Step 1: Make CalculatorState generic
type CalculatorState<T> = T

// Step 2: Update CalculatorContextType to be generic
type CalculatorContextType<T> = {
	state: CalculatorState<T>
	setState: (state: CalculatorState<T>) => void
}

// Step 3: Create context with generic type, defaulting to undefined
const CalculatorContext = createContext<CalculatorContextType<any> | undefined>(
	undefined
)

// Step 4: Generic hook to use context
function useCalculatorContext<T>() {
	const context = useContext(
		CalculatorContext as React.Context<CalculatorContextType<T> | undefined>
	)
	if (context === undefined) {
		throw new Error(
			'useCalculatorContext must be used within a CalculatorProvider'
		)
	}
	return context
}

// Step 5: Update CalculatorProvider to accept generic type
const CalculatorProvider = <T,>({
	children,
	initialState
}: {
	children: React.ReactNode
	initialState: T
}) => {
	const [state, setState] = useState<CalculatorState<T>>(initialState)

	return (
		<CalculatorContext.Provider value={{ state, setState }}>
			{children}
		</CalculatorContext.Provider>
	)
}

export { CalculatorProvider, useCalculatorContext }
