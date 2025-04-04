import { useState } from "react"

function App(){

  const [nome, setNome] = useState('tonhão do gás')

  const Formulário = () => {
    
    return (
      <>
      <h3>Formulário</h3>

      <input
      className="nome"
      onChange={(e)=>{setNome(e. target.value)}}
      type="text" />
    
      <button
      className="botao"
      onClick={()=>{
        alert('o nome digitado foi ' + nome)
      }
      }
      >
        
      CLIQUE AQUI
      </button>

      </>
    )
  }

  return (
    <div>
      <h3>Pizzaria 2D</h3>

      <Formulário />
      <Formulário />
      <Formulário />
      <Formulário />
      <Formulário />

    </div>
  )
}

export default App
