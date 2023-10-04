import ExibePerfil from "../ExibePerfil/ExibePerfil";
import "./Equipe.css";

function Equipe({n1,n2,n3,n4,crt1,crt2,crt3,crt4,img1,img2,img3,img4,team}) {
  return (
    <>
    <h1>Equipe {team}</h1>
      <div className="div-exibe">
        <ExibePerfil
          nome={n1}
          img={img1}
          crt={crt1}
        />
        <ExibePerfil
          nome={n2}
          img={img2}
          crt={crt2}
        />
        <ExibePerfil
          nome={n3}
          img={img3}
          crt={crt3}
        />
        <ExibePerfil
          nome={n4}
          img={img4}
          crt={crt4}
        />
      </div>
    </>
  );
}

export default Equipe;
