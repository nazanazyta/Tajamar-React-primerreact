//import logo from './../../logo.svg';
import './App.css';
//DEBEMOS CREARNOS EL COMPONENTE EN EL LUGAR ADECUADO
import Saludo from './../Saludo';
import Suma from './../Suma';
import ComponenteReceta from './../ComponenteReceta';

function App() {
  var dato = "Roberto";
  //SI DESEAMOS ENVIAR PARÁMETROS A LA FUNCIÓN
  //SE QUITAN LOS PARÉNTESIS
  const metodoPadre = descripcion => {
    console.log("Método del padre: " + descripcion);
  }
  // NAZA
  // const sumarNumerosPadre = (num1, num2) => {
  //   var suma = parseInt(num1) + parseInt(num2);
  //   console.log("La suma es " + suma);
  //   return suma;
  // };
  // PACO
  const sumaPadre = (num1, num2) => {
    //NUM1 Y NUM2 LOS RECIBIMOS DESDE EL HIJO
    var suma = parseInt(num1) + parseInt(num2);
    console.log("Suma padre: " + suma);
  }
  var estilo1 = {color: "#641d84", backgroundColor: "#08b51d"};
  var estilo2 = {color: "#8d993c", backgroundColor: "blue"};
  var estilo3 = {color: "#f68819", backgroundColor: "red"};
  return (
    <div className="App">
      <Saludo nombre="Nazaret" edad="26" metodo={metodoPadre} estilo={estilo1}/>
      <Saludo nombre="Vicky" edad="20" metodo={metodoPadre} estilo={estilo2}/>
      <Saludo nombre={dato} edad="29" metodo={metodoPadre} estilo={estilo3}/>
      {/* NAZA */}
      {/* <Suma num1="5" num2="8" suma={sumarNumerosPadre} color="purple" bg="yellow"/>
      <Suma num1="14" num2="7" suma={sumarNumerosPadre} color="purple" bg="yellow"/> */}
      {/* PACO */}
      <Suma  numero1="5" numero2="9" color="fuchsia" realizarSuma={sumaPadre}/>
      <Suma  numero1="17" numero2="13" color="blue" realizarSuma={sumaPadre}/>
      <hr/>
      <div className="componenteReceta">
        <ComponenteReceta />
      </div>
    </div>
  );
}

export default App;
