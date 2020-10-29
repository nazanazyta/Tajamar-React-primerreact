// NAZA
// function Suma(props){
//     const { num1, num2, suma, color, bg } = props;
//     const sumarNumeros = (num1, num2) => {
//         var suma = parseInt(num1) + parseInt(num2);
//         console.log("La suma es " + suma);
//         return suma;
//     };
//     var estiloPadre = {color: color, backgroundColor: bg};
//     var estiloHijo = {color: "red", backgroundColor: "grey"};
//     return (
//         <div>
//             <h1 style={estiloHijo}>Sumar números: {sumarNumeros(num1,num2)}</h1>
//             <h1 style={estiloPadre}>Sumar números: {suma(num1, num2)}</h1>
//         </div>
//     )
// }

// export default Suma;

// PACO
function Suma(props){
    const { numero1, numero2, color, realizarSuma } = props;
    //CREAMOS UN MÉTODO PARA PODER REALIZAR
    //LA SUMA DE LOS PARÁMETROS
    const sumar = () => {
        var suma = parseInt(numero1) + parseInt(numero2);
        console.log("La suma es " + suma);
    }
    return (
        <div>
            <h1 style={{backgroundColor: color}}>Componente Sumar</h1>
            <button onClick={() => sumar()}>Sumar números component</button>
            <button onClick={() => realizarSuma(numero1, numero2)}>Sumar números Parent</button>
        </div>)
}

export default Suma;