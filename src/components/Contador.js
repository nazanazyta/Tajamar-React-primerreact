//PARA PODER UTILIZAR FUNCIONALIDADES DE REACT
//ES NECESARIO IMPORTARLAS. POR EJEMPLO UN CSS
//QUE TENGAMOS, O ALGUNA IMAGEN...
//NECESITAMOS LA FUNCIONALIDAD DEL STATE
import React, {useState} from 'react';

function Contador(){
    //UNA VARIABLE DE ESTADO ESTARÁ COMPUESTA POR
    //NOMBRE PARA MOSTRAR Y SET PARA ESTABLECER 
    //Lo inicializamos para que reciba el tipo de dato
    const [ numero, setNumero ] = useState(0);
    const incrementar = () => {
        setNumero(numero + 1);
    }
    return(
        <div>
            <h1>Ejemplo State Contador</h1>
            <h2 style={{color: "red"}}>El valor del contador es {numero}</h2>
            <button onClick={() => incrementar()}>
                Incrementar
            </button>
            <button onClick={() => {
                setNumero(numero - 1);
            }}>
                Restar
            </button>
        </div>
    )
}

export default Contador;