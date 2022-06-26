import * as React from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import "./CardStyle.css";
import { useNavigate } from 'react-router-dom';
const CardUno = () => {
    const navigate=useNavigate()
    const ir = () => {
        navigate('/usuario/cuotas')
    }
    return (
        <div className="body__Page">
            <div className="container__article">
    
                <div className="box__article">
                   <i onClick={ir}> < CurrencyExchangeIcon /></i>
                    <h5 onClick={ir}>Consulta tus Cuotas</h5>
                </div>
               
                
            </div>
        </div>
    );
}

export default CardUno;