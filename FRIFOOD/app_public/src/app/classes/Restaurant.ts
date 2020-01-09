export class Restaurant {
  _id: string;
  name: string;
  description: string;
  timeTable: {
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
    saturday: string,
    sunday: string
  };
  idKomentarjev: string;
  front: string;
}
