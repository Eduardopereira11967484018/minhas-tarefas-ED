/* eslint-disable prettier/prettier */

import EstiloGlobal, { Container } from "./styled"
import ListaDeTarefas from "./components/conteinar/ListaDeTarefas/index"
import Sidebar from "./components/conteinar/Sidebar/index"



function App() {
  return (
  <>
  <EstiloGlobal />
  <Container>
    <Sidebar/>
    <ListaDeTarefas />
  </Container>
  </>
  )
}

export default App
