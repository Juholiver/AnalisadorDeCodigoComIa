import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className='container'>
        <h1 className='title'>Analisador de Código com IA</h1>
        <h3 className='sub-title'>
          Analise o código-fonte de seus projetos e obtenha insights valiosos
          sobre a arquitetura, as dependências e a qualidade do código.
        </h3>
        <div className="input-group">
          <textarea className='code-textarea' placeholder='Cole seu código aqui (JavaScript, HTML, CSS ETC...)'></textarea>
        </div>
        <button className="analyze-button">Analisar Código</button>
        <div className="error-message">Deu erro</div>
        
        <div className="result-container">
          <h2 className="result-title">Resultado da Análise:</h2>
          <div className="result-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla, dolores quia aliquid at, vero quidem repellendus ducimus rerum animi sapiente quas voluptatum incidunt esse recusandae temporibus, cum dignissimos ut?</div>
        </div>
      </div>
    </main>
  )
}

export default App
