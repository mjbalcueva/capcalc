'use client'

import { useCallback, useEffect, useRef } from 'react'

export const useDebounce = <T extends unknown[]>(callback: (...args: T) => void, delay?: number) => {
	const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null)

	const validDelay = Number.isFinite(delay) ? delay : 300

	const debouncedFunction = useCallback(
		(...args: T) => {
			if (debounceTimeoutRef.current) {
				clearTimeout(debounceTimeoutRef.current)
			}
			debounceTimeoutRef.current = setTimeout(() => {
				callback(...args)
			}, validDelay)
		},
		[callback, validDelay]
	)

	useEffect(() => {
		return () => {
			if (debounceTimeoutRef.current) {
				clearTimeout(debounceTimeoutRef.current)
			}
		}
	}, [])

	return debouncedFunction
}
