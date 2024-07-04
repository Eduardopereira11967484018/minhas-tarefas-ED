import * as S from "./styles";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Tarefa = () => (
  <S.Card>
    <S.Titulo>{S.Titulo}</S.Titulo>
    <S.Tag>{S.Tag}</S.Tag>
    <S.Tag>{S.Tag}</S.Tag>
    <S.Descricao />
    <S.BarraAcoes>
      <S.BotaoAcao>Editar</S.BotaoAcao>
      <S.BotaoAcao>Excluir</S.BotaoAcao>
    </S.BarraAcoes>
  </S.Card>
);
export default Tarefa;
