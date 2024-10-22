import { DialogTrigger } from './ui/dialog'
import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'
import { getSummary } from '../http/get-summary'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { useQuery } from '@tanstack/react-query'
import { PendingGoals } from './pending-goals'

dayjs.locale(ptBR)

export function Summary() {
  // usando Tanstack React Query
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 1 min
  })

  // enquanto os dados não forem carregados, não returna nada
  if (!data) {
    return null
  }

  // formatando a data com dayjs
  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  // calcular a porcentagem concluída para a barra de progresso
  const completedPercentage = Math.round((data?.completed * 100) / data?.total)

  return (
    <div className="py-10 max-w-[480px] mx-auto px-5 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Registar Meta
          </Button>
        </DialogTrigger>
      </div>
      {/* barra de progresso */}
      <div className="flex flex-col gap-3">
        <Progress max={15} value={8}>
          <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
        </Progress>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Voce completou{' '}
            <span className="text-zinc-100">{data?.completed}</span> de{' '}
            <span className="text-zinc-100">{data?.total}</span> metas nesta
            semana
          </span>
          <span>{completedPercentage}%</span>
        </div>
      </div>
      <Separator />
      {/* Metas pendentes */}
      <PendingGoals />
      {/* Listagens de metas */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>
        {/* cada dia da semana */}
        {/* Trazer o conteudo do objeto 'goalsPerDay', mas 1º temos de converte-lo para um array */}
        {Object.entries(data.goalsPerDay).map(([date, goals]) => {
          const weekDay = dayjs(date).format('dddd')
          const formattedDate = dayjs(date).format('D MMMM')
          return (
            <div key={date} className="flex flex-col gap-4">
              <h3 className="font-medium capitalize">
                {weekDay}{' '}
                <span className="text-zinc-400 text-xs">({formattedDate})</span>
              </h3>
              <ul className="flex flex-col gap-3">
                {/* 1 tarefa*/}
                {goals.map(goal => {
                  const time = dayjs(goal.completedAt).format('HH:mm')
                  return (
                    <li key={goal.id} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-pink-500" />
                      <span className="text-sm text-zinc-400">
                        Voce completou "
                        <span className="text-zinc-100">{goal.title}</span>" as{' '}
                        <span className="text-zinc-100">{time}h</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
