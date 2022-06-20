
import React from 'react';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
  Typography,
  Tab,
    Tabs,
} from '@mui/material';
import logo from "./recursos/marcas.png";

import { Lock, Menu } from '@mui/icons-material';
import photoURL from "./recursos/profile.jpeg";
import { useValue } from '../context/ContextProvider';
import UserIcons from './users/UserIcons';
import DrawerNav from './DrawerNav';

const user = { name: 'test', photoURL };

const NavBar1 = () => {
    const {
        state:{currentUser},
        dispatch,
    } = useValue();

    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const islogo = {
                    width: "100px",                  
                    };
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
              {!currentUser ? ( <Button
              color="inherit"
              startIcon={<Lock />}
              onClick={() => dispatch ({type:"OPEN_LOGIN"})}
              >
                    Ingresar
            </Button>
            ) : (
                <UserIcons />
            )}
            </>
            )}
        </Toolbar>
        </AppBar>
    </React.Fragment>
  );
};

export default NavBar1;