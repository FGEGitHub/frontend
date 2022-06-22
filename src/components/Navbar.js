import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/marcas.png";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerNav from "./DrawerNav";


const Navbar = (props) => {
  const [user, setUser] = useState(null)
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const islogo = {
                  width: "100px",                  
                  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  const hanleLogout = () => {
    /* console.log('click')
     setUser(null)
     servicioUsuario.setToken(user.token) */
     window.localStorage.removeItem('loggedNoteAppUser')
     window.location.reload(true);
   } 
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#Primary" }}>
        <Toolbar>
            <img style={islogo} src={logo} alt="logo" />
          {isMatch ? (
            <>
              <DrawerNav />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="Secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Inicio" />
                <Tab label="Nosotros" />
                <Tab label="Contacto" />
                <Tab label="Ayuda" />
              </Tabs>
              <Button onClick={handleClick} sx={{ marginLeft: "auto" }} variant="contained">
                Ingresar
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                Registrarse
              </Button>
               <Button onClick={hanleLogout} sx={{ marginLeft: "10px" }} variant="contained">
                Logout
              </Button> 
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
