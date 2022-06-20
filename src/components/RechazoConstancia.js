import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ThumbDownAltIcon variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </ThumbDownAltIcon>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rechazar{props.id}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Detalla el motivo de rechazo 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="detalle"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Rechazar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
