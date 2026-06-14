import { createFileRoute, notFound, useRouter } from '@tanstack/react-router'
import SkillCard from '#/components/SkillCard'

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon'

export const Route = createFileRoute('/')({
	component: Home,
	pendingComponent: () => (
		<div className="p-14 text-center">Loading Pokemon...</div>
	),
	pendingMs: 300,
	loader: async () => {
		//console.log('Loading data for the home route...')
		const response = await fetch(POKE_API_URL)
		const data = await response.json()

		//throw new Error('API is down') // Simulate an error for testing

		if (!data.results || data.results.length === 0) {
			throw notFound() // Simulate a 404 error for testing
		}

		return data
	},
	errorComponent: ({ error }) => {
		const router = useRouter()

		return (
			<div className="p-14 text-center text-red-500">
				<p>Oops! {error.message}!</p>
				<button
					className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
					onClick={() => router.invalidate()}
					type="button"
				>
					Try Again
				</button>
			</div>
		)
	},
	notFoundComponent: () => (
		<div className="p-14 text-center text-gray-500">
			<p>Nothing found here!</p>
		</div>
	),
})

function Home() {
	const data = Route.useLoaderData()

	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
			<ul className="mt-6 space-y-5 list-none p-0">
				{data?.results?.map((pokemon: { name: string }) => (
					<li key={pokemon.name}>
						<SkillCard name={pokemon.name} />
					</li>
				))}
			</ul>
			{/* <ul className="mt-6 space-y-2">
				<li>
					<SkillCard name="TanStack Start" />
				</li>
				<li>
					<SkillCard name="Typescript" />
				</li>
				<li>
					<SkillCard name="MongoDB" />
				</li>
			</ul> */}
		</div>
	)
}
