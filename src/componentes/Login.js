import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loginService from '../services/login'
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

const Login = () => {
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

  return (

    
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1E272E",
            padding: "1rem",
          }}
        >
          <Typography variant="h5" textAlign="center" color="white">
                Login
          </Typography>
          <CardContent>
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
              />
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
              />

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
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    
  );
};

export default Login;