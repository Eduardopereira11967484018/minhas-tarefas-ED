/* eslint-disable prettier/prettier */

import EstiloGlobal, { Container } from "./styled"
import ListaDeTarefas from "./styled/conteinar/ListaDeTarefas"
import Sidebar from "./styled/conteinar/Sidebar"



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
