import Tarefa from "../../Tarefa/index";
import { Container } from "./styles";

const ListasDeTarefas = () => (
  <Container>
    <p> 2 tarefas marcardas com: &quot;categoria&Ildquo;termo&Idquo;</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
);
export default ListasDeTarefas;
