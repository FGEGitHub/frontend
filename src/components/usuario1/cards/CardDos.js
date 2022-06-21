import * as React from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import "./CardStyle.css";
import { Button } from '@mui/material';
import ModalForm from '../../../components/usuario1/ModalTransferencia'


const CardDos = () => {

    const abrirmodal = () => {
       
      };

    return (


        <div className="body__Page">

            <div className="container__article">
           
                <div className="box__article">
                
                   <i> < CurrencyExchangeIcon /></i>
                      <h5><ModalForm /></h5> 
                      
                  
                    
                </div>
               
                
            </div>
        </div>
    );
}

export default CardDos;