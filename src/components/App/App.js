//import logo from './../../logo.svg';
import './App.css';
//DEBEMOS CREARNOS EL COMPONENTE EN EL LUGAR ADECUADO
import Saludo from './../Saludo';
import Suma from './../Suma';

function App() {
  var dato = "Roberto";
  //SI DESEAMOS ENVIAR PARÁMETROS A LA FUNCIÓN
  //SE QUITAN LOS PARÉNTESIS
  const metodoPadre = descripcion => {
    console.log("Método del padre: " + descripcion);
  }
  const sumarNumerosPadre = (num1, num2) => {
    var suma = parseInt(num1) + parseInt(num2);
    console.log("La suma es " + suma);
    return suma;
  };
  return (
    <div className="App">
      <Saludo nombre="Nazaret" edad="26" metodo={metodoPadre}/>
      <Saludo nombre="Vicky" edad="20" metodo={metodoPadre}/>
      <Saludo nombre={dato} edad="29" metodo={metodoPadre}/>
      <Suma num1="5" num2="8" suma={sumarNumerosPadre} color="purple" bg="yellow"/>
      <Suma num1="14" num2="7" suma={sumarNumerosPadre} color="red" bg="blue"/>
    </div>
  );
}

export default App;
