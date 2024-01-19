import { Button } from '@mui/material';

interface SortButtonsProps {
  onSort: (key: string) => void;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

const SortButtons: React.FC<SortButtonsProps> = ({ onSort, sortBy, sortOrder }) => (
  <>
    <Button onClick={() => onSort('price')} style={{ color: '#000' }}>
      Sort by Price {sortBy === 'price' && sortOrder === 'asc' ? '▲' : '▼'}
    </Button>

    <Button onClick={() => onSort('date')} style={{ color: '#000' }}>
      Sort by Date {sortBy === 'date' && sortOrder === 'asc' ? '▲' : '▼'}
    </Button>
  </>
);

export default SortButtons;
