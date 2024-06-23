import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}

const truncateText = (text: string, maxLength: number): string => {
	if (text.length > maxLength) {
		return `${text.substring(0, maxLength)}...`
	}
	return text
}

export { cn, truncateText }
