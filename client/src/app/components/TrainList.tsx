import { Train } from '../lib/Train';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  ListItemSecondaryAction,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TrainList: React.FC<{
  trainData: Train[];
  onDelete: (trainId: number) => void;
  onEdit: (train: Train) => void;
}> = ({ trainData, onEdit, onDelete }) => (
  <List>
    {trainData.map((train) => (
      <ListItem key={train.id} sx={{ border: '1px solid #ddd', marginBottom: '15px', padding: '10px', borderRadius: '5px' }}>
        <ListItemText
          primary={`Name: ${train.name}`}
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                Departure Place: {train.departurePlace}
              </Typography>
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Arrival Place: {train.arrivalPlace}
              </Typography>
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Departure Time: {new Date(train.departureTime).toLocaleString()}
              </Typography>
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Arrival Time: {new Date(train.arrivalTime).toLocaleString()}
              </Typography>
              <br />
              <Typography component="span" variant="body2" color="textPrimary">
                Price: ${train.price}
              </Typography>
            </>
          }
        />
        <ListItemSecondaryAction>
        <IconButton style={{ color: '#ce93d8' }} onClick={() => onEdit(train)}>
            <EditIcon />
          </IconButton>
          <IconButton style={{ color: '#ce93d8' }} onClick={() => onDelete(train.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default TrainList;
