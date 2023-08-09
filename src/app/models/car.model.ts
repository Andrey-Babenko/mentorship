import { CarModel } from './car-model.model';

export interface Car {
  id: string;
  modelId: CarModel['id'];
  modelFullName?: string;
  carTypeCd: string;
  modelYear: number | null;
  colorCd: string;
}
