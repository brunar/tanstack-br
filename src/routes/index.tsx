
import { createFileRoute } from '@tanstack/react-router'
import SkillCard from '#/components/SkillCard'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <ul className="mt-6 space-y-2">
        <li><SkillCard name="TanStack Start" /></li>
        <li><SkillCard name="Typescript" /></li>
        <li><SkillCard name="MongoDB" /></li>
      </ul>
    </div>
  )
}
