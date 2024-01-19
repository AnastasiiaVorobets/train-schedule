import { Train } from '../lib/Train';

export const sortTrainData = (data: Train[], sortBy: string, sortOrder: 'asc' | 'desc') => {
  const sortedData = [...data];

  switch (sortBy) {
    case 'price':
      sortedData.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
      break;

    case 'date':
      sortedData.sort((a, b) => {
        const dateA = new Date(a.departureTime).getTime();
        const dateB = new Date(b.departureTime).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
      break;

    default:
      sortedData.sort((a, b) => (sortOrder === 'asc' ? a.id - b.id : b.id - a.id));
  }

  return sortedData;
};
