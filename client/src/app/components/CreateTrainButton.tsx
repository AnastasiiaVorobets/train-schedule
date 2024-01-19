import { Button } from "@mui/material";

const CreateTrainButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button
    variant="contained"
    style={{ backgroundColor: '#f3e5f5', color: '#000', marginBottom: '20px' }}
    onClick={onClick}
  >
    Create New Train
  </Button>
);

export default CreateTrainButton;
