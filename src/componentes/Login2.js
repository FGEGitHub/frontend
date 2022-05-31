import React from 'react'

import { useState } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link,  CircularProgress, } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import paperStyle from '@mui/material/Paper';
import { useNavigate, useParams } from "react-router-dom";
import loginService from '../services/login'

const Login2 = () => {
    const [usuario, setUsuario] = useState({
      cuil_cuit: "",
      password: "",
    });
    const [loading, setLoading] = useState(false);
    //const [editing, setEditing] = useState(false);
  
    const navigate = useNavigate();
    const params = useParams();
  
  
  
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      try {
    
          const  user = await loginService.login({
            cuil_cuit: usuario.cuil_cuit,
            password: usuario.password
          })
         
        
          console.log(user)
        setLoading(false);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleChange = (e) =>
      setUsuario({ ...usuario, [e.target.name]: e.target.value });


      const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
      const avatarStyle={backgroundColor:'#1bbd7e'}
      const btnstyle={margin:'8px 0'}
    return(
        
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Ingresar</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
              <TextField 
                variant="filled"
                label="Cuil/cuit"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="cuil_cuit"
                onChange={handleChange}
                value={usuario.cuil_cuit}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                fullWidth required />
              <TextField 
                variant="outlined"
                label="Password"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="password"
                onChange={handleChange}
                value={usuario.password}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                fullWidth required />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!usuario.cuil_cuit || !usuario.password}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Save"
                )}
              </Button >
            </form>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login2;