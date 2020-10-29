import React, {useState} from 'react';

function Car(props){
    //CUANDO RECIBAMOS PROPS, TENDREMOS MARCA Y MODELO,
    //PERO PODRÍAMOS TENER MÁS CARACTERÍSTICAS
    //CREAMOS UN OBJETO COCHE E INICIAMOS SUS PROPIEDADES
    //CON LO QUE RECIBIMOS DEL PARENT EN PROPS
    var coche = {
        marca: props.marca
        , modelo: props.modelo
        , aceleracion: parseInt(props.aceleracion)
        , velmax: parseInt(props.velmax)
    };

    //VAMOS A TENER UN ESTADO PARA SABER SI
    //EL COCHE ESTÁ ARRANCADO O NO (BOOLEAN)
    //DICHO ESTADO QUEREMOS QUE PUEDA CAMBIAR
    //E IRÁ SOBRE UNA VARIABLE STATE
    //AL INICIAR EL COCHE ESTÁ PARADO POR DEFECTO
    const [ estado, setEstado ] = useState(false);

    //QUIERO DIBUJAR EN CASTELLANO PARA ENTERARME.
    //ESCRIBIR ARRANCADO O PARADO DEPENDIENDO DEL
    //ESTADO. ADEMÁS QUIERO PONER COLORES
    const comprobarEstado = () => {
        if(estado == true){
            return <span style={{color: "green"}}>Arrancado</span>;
        }else{
            return <span style={{color: "red"}}>Parado</span>;
        }
    }

    //QUEREMOS QUE EL COCHE TENGA VELOCIDAD. AL INICIO SERÁ 0
    //PERO INCREMENTAREMOS LA VELOCIDAD CON UN BOTÓN
    //SI QUEREMOS PINTAR LA VELOCIDAD, IRÁ AL STATE
    const [ velocidad, setVelocidad ] = useState(0);

    //MÉTODO PARA ACELERAR EL COCHE
    const acelerarCoche = () => {
        if(estado){
            if((velocidad + coche.aceleracion) <= coche.velmax){
                setVelocidad(velocidad + coche.aceleracion);
            }else{
                setVelocidad(coche.velmax);
                alert("El coche ha alcanzado la velocidad máxima...");
            }
        }else{
            setVelocidad(0);
            alert("El coche no puede acelerar parado...");
        }
    }
    return(
        <div>
            {/*<h2>El coche está... {estado}</h2>*/}  {/*No pinta booleans*/}
            {/* <h2>El coche está... {estado.toString()}</h2> */}
            <h1 style={{color: "fuchsia"}}>{coche.marca} {coche.modelo}</h1>
            <h2>El coche está... {comprobarEstado()}</h2>
            <h3 style={{color: "blue"}}>Velocidad actual: {velocidad}</h3>
            <button onClick={() => {
                setEstado(!estado);
                if(estado){
                    setVelocidad(0);
                }
            }}>
                Arrancar/Parar
            </button>
            <br />
            <button onClick={() => acelerarCoche()}>Acelerar</button>
        </div>
    )
}

export default Car;