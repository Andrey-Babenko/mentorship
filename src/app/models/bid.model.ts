import { CarModel } from './car-model.model';
export interface Bid {
  id: string;
  date: string;
  modelId: CarModel['id'];
  modelFullName?: string;
  beginPrice: number | null;
  finalPrice: number | null;
}
