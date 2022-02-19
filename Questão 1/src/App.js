import { useState } from 'react'
import './app.css'

export default function App() {
  const [n, setn] = useState('');

  function escada(degraus) {
    const escadaArray = [];
    const espacoChar = ' ';
    const degrauChar = '*';
  
    for (let n = 0; n <= degraus; n++) {
      const espacosParaAdd = espacoChar.repeat(degraus - n);
      const degrausParaAdd = degrauChar.repeat(n);
  
      escadaArray.push(espacosParaAdd + degrausParaAdd);
    }
  
    return escadaArray;
  }
 
  function calcular(){
    
    if(n <= 0 ){
      alert("digite um número maior que o")
    }
    else
    
    var lista = escada(n);
    
    for(var i = 0; i < lista.length; i++) {
      console.log(lista[i])
    }
  }


  return (
    <div className="app">
      <h1> Questão 1</h1>
      <span> Informe um número </span>

      <div className="area-input">
        <input
          type="text"
          placeholder="digite aqui o numero"
          value={n}
          onChange={ (e) => setn(e.target.value)}
        />

               <button onClick={calcular}>
          Calcular
        </button>

        <h2>Conferir a resposta no console.</h2>
        </div>
      </div>
      )
};