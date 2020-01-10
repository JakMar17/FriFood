import {User} from "./User";

export class Comment {
  _id: string;
  restaurant: string;
  comment: string;
  author: User;
  date: string;
  name: string;
  surname: string;
  rating: number;
}
