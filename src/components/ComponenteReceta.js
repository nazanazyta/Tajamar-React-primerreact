// import React from 'react';
import React, {Component} from 'react';

// class ComponenteReceta extends React.Component{
class ComponenteReceta extends Component{

    render(){

        let receta = {
            nombre: "Pizza"
            , ingredientes: ['Tomate', 'Queso', 'Jamón york']
            , calorias: 400
        };

        return (
            // <React.Fragment>
            <div className="comp-receta">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorías: ' + receta.calorias}</h2>
                <ol>
                {
                    receta.ingredientes.map((ingrediente, i) => {
                        console.log(ingrediente);
                        return (
                            <li key={i}>{ingrediente}</li>
                        )
                    })
                }
                </ol>
            </div>
            // </React.Fragment>
        )
    }

}

export default ComponenteReceta;