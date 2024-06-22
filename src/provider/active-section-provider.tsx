'use client'

import React, { createContext, useContext, useState } from 'react'

import { menuItems } from '@/lib/links'

type SectionName = (typeof menuItems)[number]['hash']

type ActiveSectionProviderProps = {
	children: React.ReactNode
}

type ActiveSectionProviderType = {
	activeSection: SectionName
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
	timeOfLastClick: number
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActiveSectionContext = createContext<ActiveSectionProviderType | null>(
	null
)

const ActiveSectionContextProvider = ({
	children
}: ActiveSectionProviderProps) => {
	const [activeSection, setActiveSection] = useState<SectionName>('#home')
	const [timeOfLastClick, setTimeOfLastClick] = useState(0) // we need to keep track of this to disable the observer temporarily when user clicks on a link

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	)
}

const useActiveSectionContext = () => {
	const context = useContext(ActiveSectionContext)

	if (context === null) {
		throw new Error(
			'useActiveSectionContext must be used within an ActiveSectionContextProvider'
		)
	}

	return context
}
export {
	ActiveSectionContext,
	ActiveSectionContextProvider,
	useActiveSectionContext
}
