
import "./App.css";
import { useState } from "react";

export default function App() {
  const[num, setNum]=useState()
  const[oldnum, setOldnum]=useState()
  const[operador, setOperador]=useState()
  

  function numeros(e) {
   var input=e.target.value  
   if(num===0){
    setNum(input);
   }else{
    setNum(num + input);
   }
  }
  function limpar() {
    setNum(0)
  }
  function porcentagem() {
    setNum(num / 100)
  }
  function maismenos() {
    if (num>0) {
      setNum(-num)
    }else{
      setNum(Math.abs(num))
    }
  }
  function Operador(e) {
    var operador=e.target.value
    setOperador(operador)
    setOldnum(num)
    setNum(0)
  }
  function calcular() {
    if(operador==="/"){
      setNum(parseFloat(oldnum)/parseFloat(num))
    }else if(operador==="x") {
      setNum(parseFloat(oldnum)*parseFloat(num))
    }else if(operador==="-") {
      setNum(parseFloat(oldnum)-parseFloat(num))
    }else if(operador==="+") {
      setNum(parseFloat(oldnum) + parseFloat(num))
    }


  }
   return (
    <>
      <div className="calculadora">
        <h1 className="titulo">Calculadora</h1>
        <h2 className="titulo2">{num}</h2>
          <button className="buttonc" onClick={limpar}>AC</button>
          <button className="buttonc" onClick={maismenos}>+/-</button>
          <button className="buttonc" onClick={porcentagem}>%</button>
          <button className="buttonl" onClick={Operador} value={"/"}>/</button>
          <button className="button" onClick={numeros} value={7}>7</button>
          <button className="button" onClick={numeros} value={8}>8</button>
          <button className="button" onClick={numeros} value={9}>9</button>
          <button className="buttonl" onClick={Operador} value={"x"}>x</button>
          <button className="button" onClick={numeros} value={4}>4</button>
          <button className="button" onClick={numeros} value={5}>5</button>
          <button className="button" onClick={numeros} value={6}>6</button>
          <button className="buttonl" onClick={Operador} value={"-"}>-</button>
          <button className="button" onClick={numeros} value={1}>1</button>
          <button className="button" onClick={numeros} value={2}>2</button>
          <button className="button" onClick={numeros} value={3}>3</button>
          <button className="buttonl" onClick={Operador} value={"+"}>+</button>
          <button className="botao" onClick={numeros} value={0}>0</button>
          <button className="button" onClick={numeros} value={"."}>.</button>
          <button className="buttonl" onClick={calcular} value={"="}>=</button>
       </div>
    </>
  );
 
}