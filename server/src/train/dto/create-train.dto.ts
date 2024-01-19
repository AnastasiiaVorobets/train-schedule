export class CreateTrainDto {
  name: string;
  departurePlace: string;
  arrivalPlace: string;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
}
