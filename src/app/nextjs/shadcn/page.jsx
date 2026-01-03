'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Link, Typography } from '@mui/material';
import "@radix-ui/themes/styles.css";

const Page = () => {

	const text = `// npm install cmdk
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from 'cmdk'`;


	return (
		<main>
			<Typography variant='h5' component="div" sx={{ margin: '1rem 0' }}>
				Shadcn components
			</Typography>
			<Typography sx={{ mb: 4 }}>
				<Link href="https://ui.shadcn.com/docs/components" target="_blank">
					https://ui.shadcn.com/docs/components
				</Link>
			</Typography>
			<CodeBlock text={`// init shadcn
npx shadcn@latest init
// add components
npx shadcn@latest add button
npx shadcn@latest add command`} />
			<Typography variant='h5' component="div" sx={{ margin: '1rem 0' }}>
				Presentation
			</Typography>
			<Typography sx={{ margin: '1rem 0' }}>
				<Link href="https://www.youtube.com/watch?v=VanmyVow1Ig" target="_blank">
					https://www.youtube.com/watch?v=VanmyVow1Ig
				</Link>
			</Typography>
			<Typography variant='h5' component="div" sx={{ margin: '1rem 0' }}>
				About
			</Typography>
			<Typography variant='p' component="div" sx={{ margin: '1rem 0' }}>
				{`I use Shadcn's`} <hl>Command</hl> component (for the Search bar inside the Navbar)
			</Typography>
			<Link href="https://ui.shadcn.com/docs/components/command" target="_blank">
				https://ui.shadcn.com/docs/components/command
			</Link>
			<Typography variant='p' component="div" sx={{ margin: '1rem 0' }}>
				The <hl>{`<Command />`}</hl> component uses the <hl>cmdk</hl> component by <hl>pacocoursey</hl>.
			</Typography>
			<Typography variant='p' component="div" sx={{ margin: '1rem 0' }}>
				It replace the <hl>KBar</hl> (npm i kbar).
			</Typography>
			<Typography variant='p' component="div" sx={{ margin: '1rem 0' }}>
				Why ?
			</Typography>
			<Link href="https://npmtrends.com/cmdk-vs-kbar-vs-scoutbar" target="_blank">
				https://npmtrends.com/cmdk-vs-kbar-vs-scoutbar
			</Link>
			<Typography variant='p' component="div" sx={{ margin: '3rem 0 1rem 0' }}>
				Shadcn use Radix UI as primitive, Radix UI is a React components library.
			</Typography>
			<Link href="https://www.radix-ui.com/" target="_blank">
				https://www.radix-ui.com/
			</Link>
			<Typography variant='h6' component="div" sx={{ margin: '1rem 0' }}>
				{`Shadcn Dialog vs. Command 'cmdk'`}
			</Typography>
			<Typography variant='p' component="div" sx={{ margin: '1rem 0' }}>
				{`I'm not using the shadcn Command component in my Search in Navbar, because I need a combo of Dialog/Command.`}
			</Typography>
			<Typography variant='p' component="div" sx={{ margin: '1rem 0' }}>
				Dialog: A search input field with ctrl+k with key word search, opening the Command component with an overlay (blur background like a classic modal)
			</Typography>
			<CodeBlock text={text} />
		</main>
	)
}

export default Page