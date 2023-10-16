import ExibeCatalogo from "../ExibePerfil/ExibeCatalogo";
import "./Catalogo.css";
import vingadores from '../../images/vingadores.jpg'

function Catalogo({lista,titulo}) {

    return (
        <>
        <h1>{titulo}</h1>
        <div className="catalogo">
        {lista.map((cat) =>
        <div className="div-catalogo">
            <ExibeCatalogo nome={cat.nome} img={cat.imagem} ano={cat.ano} h={cat.h}/>
        </div>

        )}

        </div>
    </>
    );
}




export default Catalogo;