import React from 'react';
import { Button, Dialog, DialogTitle, Typography } from '@mui/material';

const TrainDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  onDelete: (trainId: number) => void;
  onConfirmDelete: () => void;
}> = ({ open, onClose, onConfirmDelete }) => {

  return (
    <Dialog open={open} onClose={onClose} style={{ maxWidth: '400px', margin: 'auto' }}>
      <DialogTitle style={{ backgroundColor: '#f3e5f5', color: '#3f51b5', textAlign: 'center' }}>
        Confirm Deletion
      </DialogTitle>
      <Typography variant="body1" style={{ margin: '16px 0', textAlign: 'center' }}>
        Are you sure you want to delete this train? This action cannot be undone.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <Button
          variant="outlined"
          style={{ marginRight: '50px', color: '#3f51b5', borderColor: '#3f51b5' }}
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: '#3f51b5', color: '#fff' }}
          onClick={onConfirmDelete}
        >
          Confirm
        </Button>
      </div>
    </Dialog>
  );
};

export default TrainDialog;
