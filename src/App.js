import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ModeloComp from './components/Modelocomp/ModeloComp';
import Tieim from './components/Tieim/Tieim'


function App() {
  return (
    <div className="App">
      <Header/> 
      <Main/> 
      <Footer/> 
      <Tieim/>
      
      {/* <ModeloComp titulo="Titulo1" paragrafo="Paragrafo1"/>  */}
      {/* <ModeloComp titulo="Titulo2" paragrafo="Paragrafo2"/>  */}
    </div>
  );
}

export default App;
