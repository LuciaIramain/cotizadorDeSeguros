import React from 'react';

const Resumen = ({datos}) => {
    // realizo esto para que no se cargue el componente si no hay datos
    const {marca, year, plan} = datos;
    if(marca === '' || year === ''|| plan === '') return null;

    return (
        <div>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: </li>
                <li>Plan: </li>
                <li>Año del auto: </li>
            </ul>
        </div>
    );
};

export default Resumen;