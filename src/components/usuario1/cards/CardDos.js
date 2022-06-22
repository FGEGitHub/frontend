import * as React from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import "./CardStyle.css";
import { Button } from '@mui/material';
import ModalForm from '../../../components/usuario1/ModalTransferencia'
import { useNavigate } from 'react-router-dom';


const CardDos = () => {
const navigate=useNavigate()
    const abrirmodal = () => {
       
      };

const ir = () => {
    navigate('/usuario/transferencias')
}

    return (


        <div className="body__Page">

            <div className="container__article">
           
                <div className="box__article">
                
                   <i> < CurrencyExchangeIcon /></i>
                      <button onClick={ir}>Informar Transferencia </button>
                      
                  
                    
                </div>
               
                
            </div>
        </div>
    );
}

export default CardDos;