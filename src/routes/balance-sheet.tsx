import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/balance-sheet')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/balance-sheet"!</div>
}
