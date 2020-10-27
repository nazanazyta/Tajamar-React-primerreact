function Saludo(props){
    //DECLARACIÓN DE VARIABLES
    var ejemplo = "Hoy es martes";
    //DECLARACIÓN DE UNA FUNCIÓN
    const botonPulsado = () => {
        console.log("Has pulsado el botón");
        ejemplo = "Mañana es miércoles";
        //document.getElementsByTagName("h1")[0].innerText = ejemplo;
        console.log(ejemplo);
    };
    const sumarNumeros = (num1, num2) => {
        var suma = num1 + num2;
        console.log("La suma es " + suma);
    };
    const mostrarMensaje = () => {
        return <h1>Soy un mensaje HTML</h1>;
    }
    //SI DECLARAMOS LAS VARIABLES UNA A UNA,
    //A LA HORA DE LLAMARLAS EN EL div SÍ ACEPTA
    //LOS NOMBRES NUEVOS ASIGNADOS
    //var name = props.nombre;
    //var age = props.edad;
    //LOS NOMBRES DE LAS PROPIEDADES LAS ESTRUCTURA
    //NO POR POSICIÓN, SINO POR EL NOMBRE DE LOS
    //ELEMENTOS ENVIADOS DESDE EL PARENT
    const { nombre, edad, metodo } = props;
    var estilofeo = {color: "white", backgroundColor: "green"};
    return (
    //SOLO PODEMOS DEVOLVER UNA ETIQUETA, AUNQUE
    //ESTA CONTENGA OTRAS ETIQUETAS DENTRO
    <div>
        <h1 style={estilofeo}>{ejemplo}</h1>
        {/* EJECUTANDO DIRECTAMENTE LA FUNCIÓN */}
        {sumarNumeros(7,7)}
        {botonPulsado()}
        {mostrarMensaje()}
        {/* <h1>Saludando a {name}, con edad {age}</h1> */}
        <h1>Saludando a {nombre}, con edad {edad}</h1>
        <button onClick={() => metodo(nombre + " " + edad)}>Método Padre</button>
        <button onClick={() => botonPulsado()}>Pulsar botón</button>
        <button onClick={() => sumarNumeros(4,5)}>Mostrar suma</button>
    </div>
    );
}

export default Saludo;