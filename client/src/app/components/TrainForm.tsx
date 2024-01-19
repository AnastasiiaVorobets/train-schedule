import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Train } from '../lib/Train';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface TrainFormProps {
  onSubmit: SubmitHandler<Train>;
  onClose: () => void;
  initialValues?: Train | null;
}

const TrainForm: React.FC<TrainFormProps> = ({ onSubmit, onClose, initialValues }) => {
  const { register, handleSubmit, setValue, formState } = useForm<Train>({
    defaultValues: initialValues || {},
  });

  const onSubmitHandler: SubmitHandler<Train> = (data) => {
    onSubmit(data);
    onClose();
  };

  const isNotBlank = (value: string) => value.trim() !== '';

  React.useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) => {
        const typedKey = key as keyof Train;
        if (['departureTime', 'arrivalTime'].includes(key)) {
          setValue(typedKey, new Date(initialValues[typedKey] as string).toISOString().slice(0, -1));
        } else {
          setValue(typedKey, initialValues[typedKey]);
        }
      });
    }
  }, [initialValues, setValue]);

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{initialValues ? 'Edit Train' : 'Create New Train'}</DialogTitle>
      <DialogContent>
        <Paper elevation={3} style={{ padding: 20, maxWidth: 400, margin: 'auto', marginTop: 10 }}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
          <TextField
              label="Name"
              type="text"
              {...register('name', { required: 'Name is required', validate: isNotBlank })}
              fullWidth
              margin="normal"
              helperText={formState.errors.name?.message}
            />
            <TextField
              label="Departure Place"
              type="text"
              {...register('departurePlace', { required: 'Departure Place is required', validate: isNotBlank })}
              fullWidth
              margin="normal"
              helperText={formState.errors.departurePlace?.message}
            />
            <TextField
              label="Arrival Place"
              type="text"
              {...register('arrivalPlace', { required: 'Arrival Place is required', validate: isNotBlank })}
              fullWidth
              margin="normal"
              helperText={formState.errors.arrivalPlace?.message}
            />
            <TextField
              label="Departure Time"
              type="datetime-local"
              {...register('departureTime', { required: 'Departure Time is required' })}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={formState.errors.departureTime?.message}
            />
            <TextField
              label="Arrival Time"
              type="datetime-local"
              {...register('arrivalTime', { required: 'Arrival Time is required' })}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              helperText={formState.errors.arrivalTime?.message}
            />
            <TextField
              label="Price"
              type="number"
              {...register('price', { required: 'Price is required' })}
              fullWidth
              margin="normal"
              helperText={formState.errors.price?.message}
            />

            <Box display="flex" justifyContent="space-between" marginTop={2}>
              <Button type="button" onClick={onClose} style={{ color: '#ce93d8' }}>
                Close
              </Button>

              <Button type="submit" disabled={formState.isSubmitting} variant="contained" style={{ backgroundColor: '#ce93d8', color: '#000' }}>
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default TrainForm;
