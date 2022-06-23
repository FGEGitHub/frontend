import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import servicioPagos from '../services/pagos'
import {  useState } from "react";
export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
   const [form, setForm] = useState ({
    id:props.id
   })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rechazar =async (id)  => {
     await servicioPagos.rechazararpago(form)

  // window.location.reload(true)
  }
  const handleChange = (e) =>
  setForm({  ...form, [e.target.name]: e.target.value })
  return (
    <div>
      <ThumbDownAltIcon variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </ThumbDownAltIcon>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rechazar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Detalla  motivo del rechazo 
          </DialogContentText>
          <form  onSubmit={rechazar}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="detalle"
            name= "detalle"
            onChange={handleChange}
            
            fullWidth
            variant="standard"
          />
           <Button onClick={() => {rechazar(props.id)}}>Rechazar</Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
         
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
