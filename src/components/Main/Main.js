import ExibePerfil from '../ExibePerfil/ExibePerfil';
import NarutoPerfil from '../../images/narutoPerfil.webp';
import SasukePerfil from '../../images/sasukePerfil.webp';
import Sakura from '../../images/sakuraPerfil.webp';
import Kakashi from '../../images/kakashiPerfil.webp';
import Madara from '../../images/madaraPerfil.webp';
import obito from '../../images/obito.webp';
import kizame from '../../images/kisame.webp';
import Pao from '../../images/Pao.jpg';
import itachi from '../../images/itachi.jpg'
import './main.css';
import Tieim from '../Tieim/Tieim';
import Equipe from '../Equipe/Equipe';

function Main() {
    let caracKakashi = "Ele é conhecido por seu domínio em diversas técnicas ninja, sendo especialmente famoso por seu uso do Sharingan (um poderoso jutsu ocular) e por sua habilidade de copiar técnicas de outros ninjas.";
    let caracNaruto = "Ele possui uma habilidade única chamada Chakra da Kyuubi, que lhe confere grande poder. Além disso, ele é habilidoso em técnicas de clonagem e é famoso por sua técnica Rasengan";
    let caracSasuke = "Ele é um usuário talentoso do Sharingan e, mais tarde, desenvolve o Mangekyou Sharingan. Sasuke também se torna um mestre em técnicas de manipulação de raios, conhecidas como Raiton";
    let caracSakura = " Ela é altamente treinada em técnicas médicas e se destaca na manipulação de chakra para curar ferimentos. Além disso, ela desenvolve habilidades de combate notáveis";
    let caracMadara = "Madara Uchiha (うちはマダラ, Uchiha Madara) foi um lendário líder do clã Uchiha. Ele fundou Konohagakure ao lado de seu rival, Hashirama Senju, com a intenção de iniciar uma era de paz. Quando os dois não conseguiram concordar em como conseguir a paz, eles lutaram pelo controle da aldeia, um conflito que terminou na morte de Madara. Ele reescreveu sua morte e se escondeu para trabalhar em seus planos para acabar com o conflito mundial. Incapaz de conclui-los em sua fase de vida natural, ele confiou o seu conhecimento e planos para Obito Uchiha, pouco antes de sua morte real. Anos mais tarde, Madara foi revivido, e viu seus planos serem frustrados antes de morrer uma última vez."
    let caracobito = "Obito Uchiha, também conhecido por seu pseudônimo Tobi, é um personagem do mangá de Masashi Kishimoto, Naruto. Ele é apresentado pela primeira vez em uma história paralela de Kakashi Chronicle como um jovem ninja que se sacrifica para salvar seus amigos de um grupo adversário de ninjas."


    return(
        <main>
            <>
            <div className='equipe7'>
            
            <Equipe team={7}
                n1= "Maria" 
                img1={obito} 
                crt1={"lalala"} 
                n2= "Joseli"
                img2={Madara} 
                crt2={"alalalala"} 
                n3= "Clovis" 
                img3={kizame}
                crt3={"ooooooo"} 
                n4= "Natanael" 
                img4={itachi}
                crt4={"uuuuuuuuuu"} />
            <Equipe team={8} 
            n1= "Sara"
            img1={Sakura} 
            crt1={'hhhhhhhhhh'} 
            n2= "Mateus" 
            img2={SasukePerfil}
            crt2={"pppppp"}
             n3= "Joriscleuson" 
             img3={Kakashi}
             crt3={"aaaaaaaaaa"} 
             n4= "Sanafoneminerai"
             img4={NarutoPerfil} 
             crt4={"aahauhauhauahu"}/>
            </div>


            {/* <div className='equipe8'>
                <ExibePerfil nome="Madara" caracteristica={caracMadara} img={Madara}/>
                <ExibePerfil nome="obito" caracteristica={caracMadara} img={obito}/>
            </div>
            
            <Tieim nome="PaoDeQueijo" img={Pao}/> */}
            </>
        </main>

    )
}

export default Main;