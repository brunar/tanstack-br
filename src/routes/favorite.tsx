import { createFileRoute } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { useState } from 'react'
import { saveFavoritePokemonFn } from '#/server/pokemon'

export const Route = createFileRoute('/favorite')({
	component: FavoritePage,
})

function FavoritePage() {
	const [name, setName] = useState('')
	const [status, setStatus] = useState('')

	const savePokemon = useServerFn(saveFavoritePokemonFn)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setStatus('Saving...')
		await savePokemon({ data: name })

		setStatus(`Successfully saved ${name}!`)

		setName('') // Clear the input field after saving
	}

	return (
		<main className="pt-14 pb-8 px-4 max-w-3xl mx-auto w-full">
			<h1 className="text-4xl font-bold">Favorite Pokemon</h1>
			<form
				className="mt-4 space-x-2 flex items-center"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Pikachu"
					className="p-2 border rounded"
				/>
				<button
					className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
					type="submit"
				>
					Save
				</button>
			</form>
			{status && <p className="mt-4">{status}</p>}
		</main>
	)
}
