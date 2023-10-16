import Catalogo from "../Equipe/Catalogo";
import vingadores from "../../images/vingadores.jpg";
import pantera from "../../images/pantera.jpg";
import deadpool from "../../images/deadpool.jpg";
import doisHomensEmeio from "../../images/doisHomensEmeio.jpg";
import witcher from "../../images/witcher.jpg";
import naoCase from "../../images/naoCase.jpg";
import loki from "../../images/loki.jpg";
import got from "../../images/got.jpg";


function Main() {

    const listC = [
    {nome: "Vingadores", imagem: vingadores , ano: "2017" },
    {nome: "Pantera Negra", imagem: pantera , ano: "2022" },
    {nome: "DeadPool", imagem: deadpool , ano: "2015" },
    {nome: "Se beber não case", imagem: naoCase , ano: "2015" },
    ];

    const listS =[
      {nome: "The witcher" , imagem: witcher , ano:"2005"},
      {nome: "Game of thrones" , imagem: got , ano:"2008"},
      {nome: "Two and a half men" , imagem: doisHomensEmeio , ano:"2005"},
      {nome: "Loki" , imagem: loki , ano:"2022"},
      
      // {nome: "The Flash" , imagem: flash , ano:"2005"},
    ];


  return (
    <main>
      
      <Catalogo lista={listC} titulo={"Filmes"}/>
      <Catalogo lista={listS} titulo={"Séries"}/>

    </main>
  );
}

export default Main;
