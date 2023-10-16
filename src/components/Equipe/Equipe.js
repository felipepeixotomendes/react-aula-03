import ExibePerfil from "../ExibePerfil/ExibePerfil";
import "./Equipe.css";

function Equipe() {
  const listP = [
    { nome: "Felipe", imagem: "", crt: "" },
    { nome: "Irineu", imagem: "", crt: "" },
  ];
  return (
    <>
    
      {listP.map((turma) =>
      <div className="div-exibe">
        <ExibePerfil nome={turma.nome} img={turma.imagem} crt={turma.crt} />
      </div>
      )}
    </>
  );
}

export default Equipe;
