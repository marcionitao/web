import { Dialog } from './components/ui/dialog'
import { CreateGoals } from './components/create-goals'
import { Summary } from './components/summary'
// import { EmptyGoals } from './components/empty-goals'

export default function App() {
  return (
    // Dialog Modal é aberto ao clicar no botão
    <Dialog>
      {/* <EmptyGoals /> */}
      <Summary />
      {/* Toda a estrutura do dialog vai aqui, ou seja, registar uma nova meta */}
      <CreateGoals />
    </Dialog>
  )
}
