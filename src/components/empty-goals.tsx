import { Plus } from 'lucide-react'
import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-start-illustration.svg'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
export function EmptyGoals() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-8">
      <img src={logo} alt="logo" />
      <img src={letsStart} alt="lets-start" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Voce ainda não registou nenhuma meta, que tal registar algo agora?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Registar Meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
