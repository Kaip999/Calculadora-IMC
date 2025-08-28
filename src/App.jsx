import { useState } from "react"
import Header from "./components/Header"
import Resultado from "./components/Resultado"
import './css/style.css'
import './css/global.css'

function App() {

  //HOOK- useState - manipula o estado da variavel
  const[altura,setAltura]=useState();
  const [peso,setPeso] = useState();
  const [resultado,setResultado] = useState(0);
  const [ShowResult, setShowResult] = useState(false);

  //criando função de calcular imc
  const calcularIMC=(e)=>{
    e.preventDefault(); //evita reload da pagina
    if(altura > 0 && peso > 0){
      const imc=peso / (altura*altura);
      setResultado(imc.toFixed(2)); //arredonda para 2 casas decimais
      setShowResult(true);
    }else{
      alert("Por favor digite valores valídos");
      setShowResult(false)
    }
  }

  return (
    <div className="container">
      <div className="box">
        <Header/>
        <form>
          <div>
            <label htmlFor="altura">  <span>(exemplo:1.70)</span> </label>
            <input type="number" id="altura" placeholder="Digite sua altura" value={altura} onChange={(e)=>setAltura(parseFloat(e.target.value))}/>
          </div>
          <div>
            <label htmlFor="peso">  <span>(exemplo:57)</span> </label>
            <input type="number" id="peso" placeholder="Digite seu peso" value={peso} onChange={(e)=>setPeso(parseFloat(e.target.value))}/>
          </div>
          <button onClick={calcularIMC}>CALCULAR</button>
        </form>
        <Resultado/>
      </div>
      {ShowResult &&(
      <Resultado resultado={resultado}/>
    )}
    </div>
    
  )
}

export default App
