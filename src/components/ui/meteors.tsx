import { useMemo } from 'react'

import { cn } from '@/lib/utils'

const Meteors = ({
	number,
	className
}: {
	number?: number
	className?: string
}) => {
	const meteors = useMemo(() => {
		const totalMeteors = number ?? 20
		return Array.from({ length: totalMeteors }, (_, idx) => {
			const left = `${Math.floor(Math.random() * 800 - 400)}px`
			const animationDelay = `${Math.random() * 0.6 + 0.2}s`
			const animationDuration = `${Math.floor(Math.random() * 8 + 2)}s`

			return (
				<span
					key={`meteor${idx}`}
					className={cn(
						'absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
						"before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
						className
					)}
					style={{
						top: 0,
						left,
						animationDelay,
						animationDuration
					}}
				></span>
			)
		})
	}, [number, className])

	return <>{meteors}</>
}

export { Meteors }
