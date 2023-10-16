import './ExibeCatalogo.css';

function ExibeCatalogo({nome,img,ano,h}){
    return(
        <div>
            { <img className='img-exibe-catalogo' src={img} alt={nome} /*style={{height:h}}*//> }
            <h2>{nome}</h2>
            <p>{ano}</p>
        </div>
    )
}

export default ExibeCatalogo;
