import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

interface TrainSearchProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TrainSearch: React.FC<TrainSearchProps> = ({ label, value, onChange }) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    style={{ marginRight: '10px'}} 
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          🔍
        </InputAdornment>
      ),
    }}
  />
);

export default TrainSearch;
