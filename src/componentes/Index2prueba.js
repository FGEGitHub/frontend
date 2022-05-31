import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";


 const Index2prueba = () => {
    const navigate = useNavigate();
    const handleDelete = async (id) => {
        try {
          await fetch(`http://localhost:4000/tasks/${id}`, {
            method: "DELETE",
          });
          setauxs(auxs.filter((auxs) => auxs.id !== id));
        } catch (error) {
          console.error(error);
        }
      };
    const [auxs, setauxs] = useState([]); //para guardar en una variable los datos reciidos

    const listar  = async () =>  {   // llamado a la base de datos
        const response = await fetch("http://localhost:4000/");

        const data = await response.json();
        console.log(data)
        setauxs(data); //para usar la funcion y guardar en aux
    }
    useEffect(() => {
        listar()
      
    }, [])

    return(
        <>
        <h1>Tasks</h1>
        {auxs.map((aux) => (
          <Card
            style={{
              marginBottom: ".7rem",
              backgroundColor: "#1e272e",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  color: "white",
                }}
              >
                <Typography>{aux.id}</Typography>
                <Typography>{aux.id}</Typography>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => navigate(`/tasks/${aux.id}/edit`)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleDelete(aux.id)}
                  style={{ marginLeft: ".5rem" }}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </>


)

}
export default Index2prueba;