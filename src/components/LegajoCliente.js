import React, { useEffect, useState, } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import InputAdornment from "@mui/material/InputAdornment";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import IconButton from "@mui/material/IconButton";
import KeyIcon from "@mui/icons-material/Key";
import FilledInput from "@mui/material/FilledInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import servicioCliente from '../services/clientes'
import "./profile.css";
import { Box } from "@mui/system";

const LegajoCliente = (props) => {
    const [legajos, setLegajos] = useState([])
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const [address, setAddress] = useState(null);
  const [editMode, setEditMode] = useState(false);
  function submitFormHandler(event) {
    event.preventDefault();
  }
  useEffect(() => {
      
    traer()
    
}, []) 

  const traer = async() => {
       
   
      const  legajos = await servicioCliente.traerLejagos(props.cuil_cuit)
      console.log(legajos)
      setLegajos(legajos)
  
     
  
      ;
    };  
 



  return (<>  
    {/* <img src={'http://localhost:3000/usuario/Legajos'}> image</img> */}
     {legajos.map((legajo) =>( 
    <div className="profile">
      <Grid Container>
       
        <Grid item xs={8}style={{ justifyContent: "center", display: "flex" }}>
          <form onSubmit={submitFormHandler}>
            <Container>
            <Box>
            <h5>
            Datos Personales del Cliente
            </h5>
                
            </Box>
       
              <Box>
              <TextField
                  label="CUIL"
                  id="cuil"
                 // defaultValue="CUIL"
                  value= {legajo.cuil_cuit}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: !editMode,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />

              </Box>
             

              

              <Box>
                <columns lg={8}>
                  {editMode ? (
                    <div className="profile-form-button">
                      <Button
                        variant="outlined"
                        sx={{ marginRight: "10px" }}
                        onClick={() => setEditMode(false)}
                      >
                        Cancelar
                      </Button>
                      <Button variant="contained">Enviar</Button>
                    </div>
                  ) : (
                    <div className="profile-edit-button">
                      <Button
                        variant="outlined"
                        onClick={() => setEditMode(true)}
                      >
                        editar
                      </Button>
                    </div>
                  )}
                </columns>
              </Box>
            </Container>
          </form>
        </Grid>

        
      </Grid>
    </div>
    ))} </>);
}

export default LegajoCliente;