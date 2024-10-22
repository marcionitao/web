import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { getPendingGoals } from '../http/get-pending-goals'
import { useQuery } from '@tanstack/react-query'

export function PendingGoals() {
  // usando Tanstack React Query
  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, // 1 min
  })

  // enquanto os dados não forem carregados, não returna nada
  if (!data) {
    return null
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {data.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
          >
            <Plus className="size-4 text-zinc-600" />
            <span>{goal.title}</span>
          </OutlineButton>
        )
      })}
    </div>
  )
}
