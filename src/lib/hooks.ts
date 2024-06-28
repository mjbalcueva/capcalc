'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { type SectionHashType } from '@/lib/types'
import { useActiveSectionContext } from '@/providers/active-section-provider'

const useDebounce = (fn: Function, ms = 300) => {
	useEffect(() => {
		const handle = setTimeout(() => {
			fn()
		}, ms)

		return () => clearTimeout(handle)
	}, [fn, ms])
}

const useSectionInView = (sectionHash: SectionHashType, threshold = 0.75) => {
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

export { useDebounce, useSectionInView }
