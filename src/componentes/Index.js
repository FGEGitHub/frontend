import React, { useState, useEffect } from "react";
// import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

const Index = () => {
  const [aux, setaux] = useState([]);
  const navigate = useNavigate();

  

  const loadaux = async () => {
  const response = await fetch("http://localhost:4000/logueado");

    const data = await response.json();
    console.log(data)
    setaux(data);
    console.log(data)
  };





  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/tasks/${id}`, {
        method: "DELETE",
      });
      setaux(aux.filter((aux) => aux.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadaux();
  }, []);

  return (
    <>
      <h1>aux</h1>
      {aux.map((aux) => (
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
              <Typography>{aux.title}</Typography>
              <Typography>{aux.description}</Typography>
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
  );
};

export default Index;