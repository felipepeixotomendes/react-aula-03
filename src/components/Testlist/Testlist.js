// function Testlist(){
//     const dados = [
//         {nome: "Maria",idade: 20,altura:1.70},
//         {nome: "João",idade: 25,altura:1.60},
//         {nome: "Irineu",idade: 30,altura:1.80},

//     ];

//     return(
//         <>
//         {dados.map((dado) => <p>Nome: {dado.nome} <br/>idade: {dado.idade} <br/> altura: {dado.altura}</p>)}
//         </>
//     )
// };

// export default Testlist;
import Pera from "../../images/pera.webp"
import Banana from "../../images/banana.jpg"
import Maca from "../../images/maca.jpg"


function Testlist(){
    const frutas = [
        {nome: "Banana",quantidade: 3,valor: 30,imagem:Banana },
        {nome: "Maca",quantidade: 1,valor: 20, imagem:Maca},
        {nome: "Pera",quantidade: 5,valor: 50, imagem:Pera},
    ];

        return(
            <>
            {frutas.map((fruta) =>
                <div>
                <p>Nome: {fruta.nome}<br/> <br/>    Quantidade: {fruta.quantidade} <br/> Valor: {fruta.valor}</p>
                <img src={fruta.imagem} alt="" />
                </div>
                )}
                
            </>
        )
};

export default Testlist;