export interface IEvent {
  _id: string;
  event_name: string;
  event_date: string;
  event_location: string;
}

export interface IAPIResponse {
  _id: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}
