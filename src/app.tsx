import { Dialog } from './components/ui/dialog'
import { CreateGoals } from './components/create-goals'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export default function App() {

  // usando Tanstack React Query
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60 // 1 min
  })

  return (
    // Dialog Modal é aberto ao clicar no botão
    <Dialog>
      {/* condição para o quê mostrar na tela inicial */}
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      {/* Toda a estrutura do dialog vai aqui, ou seja, registar uma nova meta */}
      <CreateGoals />
    </Dialog>
  )
}
