import { Dialog } from './components/ui/dialog'
import { CreateGoals } from './components/create-goals'
import { EmptyGoals } from './components/empty-goals'

export default function App() {
  return (
    // Dialog Modal é aberto ao clicar no botão
    <Dialog>
      <EmptyGoals />
      {/* Toda a estrutura do dialog vai aqui, ou seja, registar uma nova meta */}
      <CreateGoals />
    </Dialog>
  )
}
