import { DialogTrigger } from './ui/dialog'
import { CheckCircle2, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { InOrbitIcon } from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] mx-auto px-5 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">5 a 10 de Agosto</span>
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
          <ProgressIndicator style={{ width: 200 }} />
        </Progress>
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Voce completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nesta semana
          </span>
          <span>58%</span>
        </div>
      </div>
      <Separator />
      {/* Metas pendentes */}
      <div className="flex gap-3 flex-wrap">
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Meditar
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Lavar roupa
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Estudar
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-zinc-600" />
          Correr
        </OutlineButton>
      </div>
      {/* Listagens de metas */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>
        {/* cada dia da semana */}
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Domingo <span className="text-zinc-400 text-xs">10 de Agosto</span>
          </h3>
          <ul className="flex flex-col gap-3">
            {/* 1 tarefa*/}
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Voce completou "
                <span className="text-zinc-100">Acordar cedo</span>" as{' '}
                <span className="text-zinc-100">8:13h</span>
              </span>
            </li>
            {/* 2 tarefa*/}
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Voce completou "
                <span className="text-zinc-100">Acordar cedo</span>" as{' '}
                <span className="text-zinc-100">8:13h</span>
              </span>
            </li>
            {/* 3 tarefa*/}
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-pink-500" />
              <span className="text-sm text-zinc-400">
                Voce completou "
                <span className="text-zinc-100">Acordar cedo</span>" as{' '}
                <span className="text-zinc-100">8:13h</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
