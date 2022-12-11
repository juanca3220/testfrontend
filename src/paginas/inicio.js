import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../componentes/menu';
import APIHOST from '../app.json'

const Inicio = () => {

    return (

        <div className='container'>
            <div>
                <Menu />
            </div>
            <div className='col-4 offset-4 mt-5'>
                <h1 className='text-center mb-5'>Pagina de inicio</h1>
                
            </div>
        </div>
        
    );
}

export default Inicio;