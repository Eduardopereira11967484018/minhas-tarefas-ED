import FilterCard from "../../FilterCard";
import * as S from "./styles";

function Sidebar() {
  return (
    <S.Aside>
      <div>
        <input type="text" placeholder="Buscar" />
        <S.Filter>
          <FilterCard ativo={true} contador={1} legenda={"Pendente"} />
          <FilterCard ativo={true} contador={2} legenda={"Concluidas"} />
          <FilterCard ativo={true} contador={3} legenda={"Urgentes"} />
          <FilterCard ativo={true} contador={4} legenda={"Importantes"} />
          <FilterCard ativo={true} contador={5} legenda={"Normal"} />
          <FilterCard ativo={true} contador={6} legenda={"Todas"} />
        </S.Filter>
      </div>
    </S.Aside>
  );
}

export default Sidebar;
