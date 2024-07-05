'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import type { HashType } from '@/lib/types'
import { useActiveSectionContext } from '@/providers/active-section-provider'

export const useSectionInView = (sectionHash: HashType, threshold = 0.75) => {
	const { ref, inView } = useInView({ threshold })
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionHash)
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionHash])
	return { ref }
}
