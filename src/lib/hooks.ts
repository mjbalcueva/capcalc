'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { SectionHash } from '@/lib/types'
import { useActiveSectionContext } from '@/provider/active-section-provider'

const useSectionInView = (sectionHash: SectionHash, threshold = 0.75) => {
	const { ref, inView } = useInView({ threshold })
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionHash)
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionHash])

	return {
		ref
	}
}

export { useSectionInView }
