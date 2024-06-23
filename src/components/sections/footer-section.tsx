const FooterSection = () => {
	return (
		<section className="flex items-center justify-center bg-white py-10 dark:bg-[#050506]">
			<p className="text-gray-500">
				© {new Date().getFullYear()}. All rights reserved.
			</p>
		</section>
	)
}

export { FooterSection }
