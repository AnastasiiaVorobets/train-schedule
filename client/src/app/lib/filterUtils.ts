import { Train } from '../lib/Train';

export const filterTrainData = (data: Train[], departureSearchTerm: string, arrivalSearchTerm: string) => {
  const lowercasedDepartureSearchTerm = departureSearchTerm.toLowerCase();
  const lowercasedArrivalSearchTerm = arrivalSearchTerm.toLowerCase();

  return data.filter((train) =>
    train.departurePlace.toLowerCase().includes(lowercasedDepartureSearchTerm) &&
    train.arrivalPlace.toLowerCase().includes(lowercasedArrivalSearchTerm)
  );
};
