'use client'

import { useEffect } from 'react'
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { setupServerActionHooks } from 'zsa-react-query'

import { type SectionHashType } from '@/lib/types'
import { useActiveSectionContext } from '@/providers/active-section-provider'

const useSectionInView = (sectionHash: SectionHashType, threshold = 0.75) => {
	const { ref, inView } = useInView({ threshold })
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionHash)
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionHash])

	return { ref }
}

const {
	useServerActionQuery,
	useServerActionMutation,
	useServerActionInfiniteQuery
} = setupServerActionHooks({
	hooks: {
		useQuery: useQuery,
		useMutation: useMutation,
		useInfiniteQuery: useInfiniteQuery
	}
})

export {
	useSectionInView,
	useServerActionInfiniteQuery,
	useServerActionMutation,
	useServerActionQuery
}
