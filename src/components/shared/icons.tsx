import { LucideProps, Moon, Sun } from 'lucide-react'

const Icons = {
	moon: Moon,
	sun: Sun,
	logo: (props: LucideProps) => (
		<svg version="1.0" viewBox="0 0 750 750" {...props}>
			<path
				fill="currentColor"
				d="M651 173H185v-50h466zm24 18H161v-13h514zm0-73H161v-13h514zm-24 510H185v-49h466zm24 18H161v-12h514zm0-73H161v-12h514zm-413-46V223h32v304zm-12 15V208h8v334zm48 0V208h8v334zm274-280H312v-28h260zm0 0"
			/>
			<path
				fill="currentColor"
				d="M585 272H299v-7h286zm0-41H299v-7h286zm-13 285H312v-27h260zm13 10H299v-6h286zm0-40H299v-7h286zM96 647V103h58v544zm-21 28V75h14v600zm85 0V75h15v600zm0 0"
			/>
			<path fill="currentColor" d="M169 105h35v86h-35zm0 456h35v85h-35zm0 0" />
		</svg>
	)
}

export { Icons }
