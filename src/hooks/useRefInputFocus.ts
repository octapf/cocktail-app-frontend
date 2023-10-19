import { useRef, useState } from 'react'

export const useRefInputFocus = () => {
	const [isExpanded, setIsExpanded] = useState(false)

	const searchInput = useRef<HTMLInputElement>(null)

	/* useEffect(() => {
		if (isExpanded) {
			setTimeout(() => {
				searchInput.current?.focus()
			}, 100)
		}
	}, [isExpanded]) */

	return { expandNav: [isExpanded, setIsExpanded] as const, searchInput }
}
