function Suma(props){
    // const { num1, num2 } = props;
    // const sumarNumeros = (num1, num2) => {
    //     var suma = parseInt(num1) + parseInt(num2);
    //     console.log("La suma es " + suma);
    // };
    const { num1, num2, suma, color, bg } = props;
    var estilo = {color: color, backgroundColor: bg};
    return (
        <div>
            {/* <h1 style={estilo}>Sumar números: {sumarNumeros(num1,num2)}</h1> */}
            <h1 style={estilo}>Sumar números: {suma(num1, num2)}</h1>
        </div>
    )
}

export default Suma;