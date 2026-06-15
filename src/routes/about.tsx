import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
	component: About,
	head: () => ({
		meta: [
			{
				title: 'About us | Agent Skills',
			},
			{
				name: 'description',
				content: 'Learn more about the team behind Agent Skills',
			},
		],
	}),
})

function About() {
	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold">About</h1>
		</div>
	)
}
